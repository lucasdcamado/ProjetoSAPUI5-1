/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import Modelos.Usuarios;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


    public class DAOUsuarios {
    
        private Connection conn;

        public DAOUsuarios(){
            DAO d = new DAO();

            conn = d.conectar();
        }
    
        
     public void cadastrarUsuario (Usuarios usuarios) {
        try {
            String sql = "insert into usuarios (nome, telefone, cpf) values"
                    +"(?,?,?)";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            st.setString(1, usuarios.getNomeUsuario());
            st.setString(2, usuarios.getTelefoneUsuario());
            st.setString(3, usuarios.getCpfUsuario());
            
            
            
            st.execute();
            st.close();
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
        
    }  
     
    public void atualizarUsuario(Usuarios novo){
        try {
            String sql = "update usuarios set nome=?, telefone=?, cpf=?, where id=? ";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            
            st.setString(1, novo.getNomeUsuario());
            st.setString(2, novo.getTelefoneUsuario());
            st.setString(3, novo.getCpfUsuario());
            st.setInt(4, novo.getIdUsuario());
          
              
               
            st.execute();
            st.close();
        } catch (SQLException ex) {
          throw new RuntimeException(ex); 
        }
    }
    
    public void deletarUsuario(Usuarios u){
        try {
            String sql = "delete from usuarios where nome=? ";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            
            st.setString(1, u.getNomeUsuario());
               
            st.execute();
            st.close();
        } catch (SQLException ex) {
          throw new RuntimeException(ex); 
        }
    }
    
    public List<Usuarios> listarUsuarios(){
        try {
            String sql = "select * from usuarios;";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            ResultSet rs = st.executeQuery();
            
            List<Usuarios> lista = new ArrayList<Usuarios>();
            
            while(rs.next()){
                Usuarios u = new Usuarios();
                u.setIdUsuario(rs.getInt("id"));
                u.setNomeUsuario(rs.getString("nome"));
                u.setTelefoneUsuario(rs.getString("telefone"));
                u.setCpfUsuario(rs.getString("cpf"));
                
                lista.add(u);
            }
            
            rs.close();
            st.close();
            
            return lista;
            
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
    }
}
