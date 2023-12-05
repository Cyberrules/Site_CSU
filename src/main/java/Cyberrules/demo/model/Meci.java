package Cyberrules.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Meci {
    private Long meciId;
    private Date datameci;
    private Long echipaid;
    private Long adversarid;
    private String locatie;
    private Integer scorechipa;
    private Integer scoradversar;
    private String editia;
    private String tipcampionat;
    private String linkmeci;
    private boolean isDeleted;
    public Meci(){

    }
    public Meci(Long meciId, Date datameci, Long echipaid, Long adversarid, String locatie, Integer scorechipa, Integer scoradversar, String editia, String tipcampionat, String linkmeci, boolean isDeleted) {
        this.meciId = meciId;
        this.datameci = datameci;
        this.echipaid = echipaid;
        this.adversarid = adversarid;
        this.locatie = locatie;
        this.scorechipa = scorechipa;
        this.scoradversar = scoradversar;
        this.editia = editia;
        this.tipcampionat = tipcampionat;
        this.linkmeci = linkmeci;
        this.isDeleted = isDeleted;
    }
    @JsonProperty("meciId")
    public Long getMeciId() {
        return meciId;
    }

    public void setMeciId(Long meciId) {
        this.meciId = meciId;
    }

    public Date getDatameci() {
        return  datameci;
    }

    public void setDatameci(Date datameci) {
        this.datameci = datameci;
    }

    public Long getEchipaid() {
        return echipaid;
    }

    public void setEchipaid(Long echipaid) {
        this.echipaid = echipaid;
    }

    public Long getAdversarid() {
        return adversarid;
    }

    public void setAdversarid(Long adversarid) {
        this.adversarid = adversarid;
    }

    public String getLocatie() {
        return locatie;
    }

    public void setLocatie(String locatie) {
        this.locatie = locatie;
    }

    public Integer getScorechipa() {
        return scorechipa;
    }

    public void setScorechipa(Integer scorechipa) {
        this.scorechipa = scorechipa;
    }

    public Integer getScoradversar() {
        return scoradversar;
    }

    public void setScoradversar(Integer scoradversar) {
        this.scoradversar = scoradversar;
    }

    @JsonProperty("editia")
    public String getEditia() {
        return editia;
    }

    public void setEditia(String editia) {
        this.editia = editia;
    }

    public String getTipcampionat() {
        return tipcampionat;
    }

    public void setTipcampionat(String tipcampionat) {
        this.tipcampionat = tipcampionat;
    }

    @JsonProperty("linkmeci")
    public String getLinkmeci() {
        return linkmeci;
    }

    public void setLinkmeci(String linkmeci) {
        this.linkmeci = linkmeci;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
