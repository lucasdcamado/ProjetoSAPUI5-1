/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import Modelos.Filmes;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Lucas Amado
 */
public class DAOFilmes {
        private Connection conn;

        public DAOFilmes(){
            DAO d = new DAO();

            conn = d.conectar();
        }
        
        public void RegistroFilmes(Filmes filmes) {
        try {
            String sql = "insert into filmes (nomefilme, secao, duracao) values"
                    +"(?,?,?)";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            
            st.setString(1, filmes.getNomeFilme());
            st.setString(2, filmes.getSecao());
            st.setString(3, filmes.getDuracao());
            
            
            
            
            st.execute();
            st.close();
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
        
    }
    
        public void deletarFilme(Filmes f){
        try {
            String sql = "delete from filmes where nomefilme=? ";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            st.setString(1, f.getNomeFilme());
            
            
            
            st.execute();
            st.close();
        
        } catch (SQLException ex) {
          throw new RuntimeException(ex); 
        }
    }    
        
        
        
    public List<Filmes> listarFilmes(){
        try {
            String sql = "select * from filmes;";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            ResultSet rs = st.executeQuery();
            
            List<Filmes> lista = new ArrayList<Filmes>();
            
            while(rs.next()){
                Filmes f = new Filmes();
                f.setIdFilme(rs.getInt("id"));
                f.setNomeFilme(rs.getString("nomefilme"));
                f.setSecao(rs.getString("secao"));
                f.setDuracao(rs.getString("duracao"));
                
                lista.add(f);
            }
            
            rs.close();
            st.close();
            
            return lista;
            
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
    }
}

