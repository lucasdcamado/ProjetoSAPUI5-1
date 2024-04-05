/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MainAPS;
import DAO.DAO;
import ViewAPS.LocadoraDeFilmes;





public class MainAPS {
    public static void main(String[] args) {
        //DAO dao = new DAO();
        
        //dao.conectar();
        
        //System.out.println("Estou conectado!!!!");
        
         LocadoraDeFilmes locadora = new LocadoraDeFilmes();
         locadora.setLocationRelativeTo(null);
         locadora.setVisible(true);
        
    }
}
