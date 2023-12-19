package Cyberrules.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;


public class Stire {
    private Long stireID;
    private String datapublicarii;
    private String titlu;
    private String continut;
    private Long userId;
    private boolean isinfuture;
    private boolean isDeleted;

    public Stire() {
    }

    public Stire(Long stireID, String datapublicarii, String titlu, String continut, Long userId, boolean isinfuture, boolean isDeleted) {
        this.stireID = stireID;
        this.datapublicarii = datapublicarii;
        this.titlu = titlu;
        this.continut = continut;
        this.userId = userId;
        this.isinfuture = isinfuture;
        this.isDeleted = isDeleted;
    }
    @JsonProperty("stireid")
    public Long getStireID() {
        return stireID;
    }

    public void setStireID(Long stireID) {
        this.stireID = stireID;
    }
    @JsonProperty("datapublicarii")
    public String getDatapublicarii() {
        return datapublicarii;
    }

    public void setDatapublicarii(String datapublicarii) {
        this.datapublicarii = datapublicarii;
    }

    @JsonProperty("titlu")
    public String getTitlu() {
        return titlu;
    }

    public void setTitlu(String titlu) {
        this.titlu = titlu;
    }

    @JsonProperty("continut")
    public String getContinut() {
        return continut;
    }

    public void setContinut(String continut) {
        this.continut = continut;
    }

    @JsonProperty("userid")
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @JsonProperty("isinfuture")
    public boolean isIsinfuture() {
        return isinfuture;
    }

    public void setIsinfuture(boolean isinfuture) {
        this.isinfuture = isinfuture;
    }

    @JsonProperty("isdeleted")
    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
