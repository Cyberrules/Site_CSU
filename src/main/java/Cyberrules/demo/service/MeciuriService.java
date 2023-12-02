package Cyberrules.demo.service;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Cyberrules.demo.model.Meci;
import org.springframework.stereotype.Service;

@Service
public class MeciuriService {
    private static final String URL = "jdbc:postgresql://localhost:5432/cyberrules";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";
    public List<Meci> getMeciuri() {
        List<Meci> meciuri = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM Meciuri")) {

            while (rs.next()) {
                Meci meci = new Meci(
                        rs.getLong("meciid"),
                        rs.getDate("datameci"),
                        rs.getLong("echipaid"),
                        rs.getLong("adversarid"),
                        rs.getString("locatie"),
                        rs.getInt("scorechipa"),
                        rs.getInt("scoradversar"),
                        rs.getString("Editia"),
                        rs.getString("TipCampionat"),
                        rs.getString("LinkMeci"),
                        rs.getBoolean("isDeleted")
                );

                meciuri.add(meci);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return meciuri;
    }
    public String addMeci(Meci meci)
    {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO Meciuri( datameci, echipaid, adversarid, locatie, scorechipa, scoradversar, editia, tipcampionat, linkmeci, isdeleted) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                     Statement.RETURN_GENERATED_KEYS)) {
            java.util.Date dataUtil = meci.getDatameci();
            java.sql.Date dataSql = new java.sql.Date(dataUtil.getTime());
            ps.setDate(1, dataSql);
            ps.setLong(2, meci.getEchipaid());
            ps.setLong(3, meci.getAdversarid());
            ps.setString(4, meci.getLocatie());
            ps.setInt(5, meci.getScorechipa());
            ps.setInt(6, meci.getScoradversar());
            ps.setString(7, meci.getEditia());
            ps.setString(8, meci.getTipcampionat());
            ps.setString(9, meci.getLinkmeci());
            ps.setBoolean(10, meci.isDeleted());

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "Creating meci failed, no rows affected.";
            }
            else{
                return "Meci added successfully";
            }

        } catch (SQLException e) {
            return "Failed to add meci - " + e.getMessage();
        }
    }

    public String deleteMeci(Long meciID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Meciuri WHERE MeciId = ?")) {

            ps.setLong(1, meciID);


            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "No meci found with ID: "+meciID;
            }
            else{
                return "Meci with ID " + meciID + " deleted successfully";
            }

        } catch (SQLException e) {
            return "Failed to delete medci - " + e.getMessage();
        }
    }
    public Meci getMeci(Long meciID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Meciuri WHERE meciID = ?")) {
            ps.setLong(1, meciID);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Meci meci = new Meci(
                rs.getLong("meciid"),
                        rs.getDate("datameci"),
                        rs.getLong("echipaid"),
                        rs.getLong("adversarid"),
                        rs.getString("locatie"),
                        rs.getInt("scorechipa"),
                        rs.getInt("scoradversar"),
                        rs.getString("Editia"),
                        rs.getString("TipCampionat"),
                        rs.getString("LinkMeci"),
                        rs.getBoolean("isDeleted")
                         );
                return meci;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public String updateMeci(Long meciID, Meci meci) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {

            String updateQuery = "UPDATE meciuri SET datameci=?, echipaid=?, adversarid=?, locatie=?, scorechipa=?, scoradversar=?, editia=?, tipcampionat=?, linkmeci=?, isdeleted=? WHERE meciid=?";

            try (PreparedStatement ps = conn.prepareStatement(updateQuery)) {

                ps.setDate(1, new java.sql.Date(meci.getDatameci().getTime()));
                ps.setLong(2, meci.getEchipaid());
                ps.setLong(3, meci.getAdversarid());
                ps.setString(4, meci.getLocatie());
                ps.setInt(5, meci.getScorechipa());
                ps.setInt(6, meci.getScoradversar());
                ps.setString(7, meci.getEditia());
                ps.setString(8, meci.getTipcampionat());
                ps.setString(9, meci.getLinkmeci());
                ps.setBoolean(10, meci.isDeleted());
                ps.setLong(11, meciID);

                int affectedRows = ps.executeUpdate();

                if (affectedRows == 0) {
                    return "No meci found with ID: " + meciID;
                } else {
                    return "Meci with ID " + meciID + " updated successfully";
                }
            }
        } catch (SQLException e) {
            return "Failed to update meci - " + e.getMessage();
        }
    }

}
