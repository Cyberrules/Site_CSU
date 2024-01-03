package Cyberrules.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Trofee {
    private Long trofeeid;
    private String nume;
    private Integer an;
    private Long echipaid;
    private Long meciid;
    private byte[] imagine;
    private boolean isdeleted;

    public Trofee() {
    }

    public Trofee(Long trofeeid, String nume, Integer an, Long echipaid, Long meciid, byte[] imagine, boolean isdeleted) {
        this.trofeeid = trofeeid;
        this.nume = nume;
        this.an = an;
        this.echipaid = echipaid;
        this.meciid = meciid;
        this.imagine = imagine;
        this.isdeleted = isdeleted;
    }

    @JsonProperty("trofeeid")
    public Long getTrofeid() {
        return trofeeid;
    }

    public void setTrofeid(Long trofeid) {
        this.trofeeid = trofeid;
    }

    @JsonProperty("nume")
    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    @JsonProperty("an")
    public Integer getAn() {
        return an;
    }

    public void setAn(Integer an) {
        this.an = an;
    }

    @JsonProperty("echipaid")
    public Long getEchipaid() {
        return echipaid;
    }

    public void setEchipaid(Long echipaid) {
        this.echipaid = echipaid;
    }

    @JsonProperty("meciid")
    public Long getMecid() {
        return meciid;
    }

    public void setMecid(Long mecid) {
        this.meciid = mecid;
    }

    @JsonProperty("imagine")
    public byte[] getImagine() {
        return imagine;
    }

    public void setImagine(byte[] imagine) {
        this.imagine = imagine;
    }

    @JsonProperty("isdeleted")
    public boolean isIsdeleted() {
        return isdeleted;
    }

    public void setIsdeleted(boolean isdeleted) {
        this.isdeleted = isdeleted;
    }
}
