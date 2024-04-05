/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;


public class DAO {
    public Connection conectar(){
        
        try {
            String url = "jdbc:postgresql://localhost:5432/APS";
            String usuario = "postgres";
            String senha = "Cagao9000";
            
            return DriverManager.getConnection(url, usuario, senha);
        } catch (SQLException ex) {
            throw new RuntimeException("Conexão não estabilizada!");
        }
    }
}
