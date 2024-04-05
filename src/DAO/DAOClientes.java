
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;
import Modelos.Clientes;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;


    public class DAOClientes {
        private Connection conn;

        public DAOClientes(){
            DAO d = new DAO();

            conn = d.conectar();
        }
        
     public void inserirClientes (Clientes clientes) {
        try {
            String sql = "insert into clientes (nome, telefone, cpf) values"
                    +"(?,?,?)";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            st.setString(1, clientes.getNome());
            st.setString(2, clientes.getTelefone());
            st.setString(3, clientes.getCpf());
            
            
            st.execute();
            st.close();
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
        
    }  
     
    public void atualizarCliente(Clientes novo){
        try {
            String sql = "update clientes set nome=?, telefone=?, cpf=?, where id=? ";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            st.setString(1, novo.getNome());
            st.setString(2, novo.getTelefone());
            st.setString(3, novo.getCpf());
            st.setInt(4, novo.getIDcliente());
          
              
               
            st.execute();
            st.close();
        } catch (SQLException ex) {
          throw new RuntimeException(ex); 
        }
    }
    
        
    
   
    
    public void deletarCliente(Clientes c){
        try {
            String sql = "delete from clientes where nome=? ";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            st.setString(1, c.getNome());
            
            
            
            st.execute();
            st.close();
        
        } catch (SQLException ex) {
          throw new RuntimeException(ex); 
        }
    }
    
    public List<Clientes> listarClientes(){
        try {
            String sql = "select * from clientes;";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            ResultSet rs = st.executeQuery();
            
            List<Clientes> lista = new ArrayList<Clientes>();
            
            while(rs.next()){
                Clientes c = new Clientes();
                c.setIDcliente(rs.getInt("id"));
                c.setNome(rs.getString("nome"));
                c.setTelefone(rs.getString("telefone"));
                c.setCpf(rs.getString("cpf"));
                
                lista.add(c);
            }
            
            rs.close();
            st.close();
            
            return lista;
            
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
    }
}
