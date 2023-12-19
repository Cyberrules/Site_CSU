package Cyberrules.demo.service;
import Cyberrules.demo.model.Stire;
import org.springframework.stereotype.Service;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
@Service
public class StireService {
    private static final String URL = "jdbc:postgresql://localhost:5432/cyberrules";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";
    public List<Stire> getStire() {
        List<Stire> stiri = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM Stiri")) {

            while (rs.next()) {
                Stire stire = new Stire(
                        rs.getLong("stireID"),
                        rs.getString("datapublicarii"),
                        rs.getString("titlu"),
                        rs.getString("continut"),
                        rs.getLong("userID"),
                        rs.getBoolean("isinfuture"),
                        rs.getBoolean("isDeleted")

                );

                stiri.add(stire);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return stiri;
    }
    public String addStire(Stire stire)
    {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO stiri(datapublicarii, titlu, continut, userid, isinfuture, isdeleted) VALUES ( ?, ?, ?, ?, ?, ?)",
            Statement.RETURN_GENERATED_KEYS)) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
            java.util.Date parsedDate = dateFormat.parse(stire.getDatapublicarii());
            Date sqlDate = new Date(parsedDate.getTime());
            ps.setDate(1, sqlDate);
            ps.setString(2, stire.getTitlu());
            ps.setString(3, stire.getContinut());
            ps.setLong(4, stire.getUserId());
            ps.setBoolean(5, stire.isIsinfuture());
            ps.setBoolean(6, stire.isDeleted());


            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "Creating stire failed, no rows affected.";
            }
            else{
                return "Stire added successfully";
            }

        } catch (SQLException e) {
            return "Failed to add stire - " + e.getMessage();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
    public String deleteStire(Long stireID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Stiri WHERE stireId = ?")) {

            ps.setLong(1, stireID);


            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "No stire found with ID: "+stireID;
            }
            else{
                return "Stire with ID " + stireID + " deleted successfully";
            }

        } catch (SQLException e) {
            return "Failed to delete stire - " + e.getMessage();
        }
    }
    public Stire getStire(Long stireID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Stiri WHERE stireID = ?")) {
            ps.setLong(1, stireID);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Stire stire = new Stire(
                        rs.getLong("stireID"),
                        rs.getString("datapublicarii"),
                        rs.getString("titlu"),
                        rs.getString("continut"),
                        rs.getLong("userID"),
                        rs.getBoolean("isinfuture"),
                        rs.getBoolean("isDeleted")

                );
                return stire;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }


    public String updateStire(Long stireID, Stire stire) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {

            String updateQuery = "UPDATE stiri\n" +
                    "\tSET  datapublicarii=?, titlu=?, continut=?, userid=?, isinfuture=?, isdeleted=?\n" +
                    "\tWHERE stireid=?";

            try (PreparedStatement ps = conn.prepareStatement(updateQuery)) {
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
                java.util.Date parsedDate = dateFormat.parse(stire.getDatapublicarii());
                Date sqlDate = new Date(parsedDate.getTime());
                ps.setDate(1, sqlDate);
                ps.setString(2, stire.getTitlu());
                ps.setString(3, stire.getContinut());
                ps.setLong(4, stire.getUserId());
                ps.setBoolean(5, stire.isIsinfuture());
                ps.setBoolean(6,stire.isDeleted());
                ps.setLong(7, stireID);

                int affectedRows = ps.executeUpdate();

                if (affectedRows == 0) {
                    return "No stire found with ID: " + stireID;
                } else {
                    return "Stire with ID " + stireID + " updated successfully";
                }
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
        } catch (SQLException e) {
            return "Failed to update stire - " + e.getMessage();
        }
    }

}
