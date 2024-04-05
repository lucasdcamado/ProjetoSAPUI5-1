/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelos;

/**
 *
 * @author Lucas Amado
 */
public class FilmesAlugados {
    private String nome;
    private String DVDnome;
    private String DataAlocacao;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDVDnome() {
        return DVDnome;
    }

    public void setDVDnome(String DVDnome) {
        this.DVDnome = DVDnome;
    }

    public String getDataAlocacao() {
        return DataAlocacao;
    }

    public void setDataAlocacao(String DataAlocacao) {
        this.DataAlocacao = DataAlocacao;
    }
}
