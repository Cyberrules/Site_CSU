package Cyberrules.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;

public class Jucator {
    private Long JucatorID;
    private String Nume;
    private String Prenume;
    private String Pozitie;
    private Integer Numar;
    private String DataNasterii;
    private String Nationaliate;
    private Integer Inaltime;
    private String Descriere;
    private String caleImagine;
    private Long EchipaID;
    private boolean isDeleted;

    public Jucator(Long jucatorID, String nume, String prenume, String pozitie, Integer numar, String dataNasterii, String nationaliate, Integer inaltime, String descriere, String caleImagine, Long echipaID, boolean isDeleted) {
        JucatorID = jucatorID;
        Nume = nume;
        Prenume = prenume;
        Pozitie = pozitie;
        Numar = numar;
        DataNasterii = dataNasterii;
        Nationaliate = nationaliate;
        Inaltime = inaltime;
        Descriere = descriere;
        this.caleImagine = caleImagine;
        EchipaID = echipaID;
        this.isDeleted = isDeleted;
    }
    @JsonProperty("jucatorID")
    public Long getJucatorID() {
        return JucatorID;
    }

    public void setJucatorID(Long jucatorID) {
        JucatorID = jucatorID;
    }
    @JsonProperty("nume")
    public String getNume() {
        return Nume;
    }
    public void setNume(String nume) {
        Nume = nume;
    }
    @JsonProperty("prenume")
    public String getPrenume() {
        return Prenume;
    }

    public void setPrenume(String prenume) {
        Prenume = prenume;
    }
    @JsonProperty("pozitie")
    public String getPozitie() {
        return Pozitie;
    }

    public void setPozitie(String pozitie) {
        Pozitie = pozitie;
    }
    @JsonProperty("numar")
    public Integer getNumar() {
        return Numar;
    }

    public void setNumar(Integer numar) {
        Numar = numar;
    }
    @JsonProperty("dataNasterii")
    public String getDataNasterii() {
        return DataNasterii;
    }

    public void setDataNasterii(String dataNasterii) {
        DataNasterii = dataNasterii;
    }
    @JsonProperty("nationalitate")
    public String getNationaliate() {
        return Nationaliate;
    }

    public void setNationaliate(String nationaliate) {
        Nationaliate = nationaliate;
    }
    @JsonProperty("inaltime")
    public Integer getInaltime() {
        return Inaltime;
    }

    public void setInaltime(Integer inaltime) {
        Inaltime = inaltime;
    }
    @JsonProperty("descriere")
    public String getDescriere() {
        return Descriere;
    }

    public void setDescriere(String descriere) {
        Descriere = descriere;
    }
    @JsonProperty("caleImagine")
    public String getCaleImagine() {
        return caleImagine;
    }

    public void setCaleImagine(String caleImagine) {
        this.caleImagine = caleImagine;
    }
    @JsonProperty("echipaID")
    public Long getEchipaID() {
        return EchipaID;
    }

    public void setEchipaID(Long echipaID) {
        EchipaID = echipaID;
    }
    @JsonProperty("isDeleted")
    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
