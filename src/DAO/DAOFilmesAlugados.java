/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import Modelos.FilmesAlugados;
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
public class DAOFilmesAlugados {
    
    private Connection conn;

        public DAOFilmesAlugados(){
            DAO d = new DAO();

            conn = d.conectar();
        }
    
    public void RegistroFilmesAlugados (FilmesAlugados filmesalugados) {
        try {
            String sql = "insert into filmesalugados (nome, dvdnome, dataalocacao) values"
                    +"(?,?,?)";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            st.setString(1, filmesalugados.getNome());
            st.setString(2, filmesalugados.getDVDnome());
            st.setString(3, filmesalugados.getDataAlocacao());
            
            
            
            st.execute();
            st.close();
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
        
    }
    
    public List<FilmesAlugados> listarFilmesAlugados(){
        try {
            String sql = "select * from filmesalugados;";
            
            PreparedStatement st = conn.prepareStatement(sql);
            
            ResultSet rs = st.executeQuery();
            
            List<FilmesAlugados> lista = new ArrayList<FilmesAlugados>();
            
            while(rs.next()){
                FilmesAlugados f = new FilmesAlugados();
                f.setNome(rs.getString("nome"));
                f.setDVDnome(rs.getString("dvdnome"));
                f.setDataAlocacao(rs.getString("dataalocacao"));
                
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
