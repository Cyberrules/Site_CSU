package Cyberrules.demo.service;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import Cyberrules.demo.model.Echipa;
import Cyberrules.demo.model.Meci;
import org.springframework.stereotype.Service;

@Service
public class EchipaService {
    private static final String URL = "jdbc:postgresql://localhost:5432/cyberrules";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";
    public List<Echipa> getEchipa() {
        List<Echipa> echipe = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM echipa")) {

            while (rs.next()) {
                Echipa echipa = new Echipa(
                        rs.getLong("echipaid"),
                        rs.getString("categorie"),
                        rs.getString("nume"),
                        rs.getBytes("imagine"),
                        rs.getBoolean("isDeleted")
                );

                echipe.add(echipa);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return echipe;
    }
    public String addEchipa(Echipa echipa)
    {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO Echipa(echipaid, categorie, nume, imagine,isdeleted)VALUES (?, ?, ?, ?, ?)",Statement.RETURN_GENERATED_KEYS)) {
            ps.setLong(1, echipa.getEchipaId());
            ps.setString(2, echipa.getCategorie());
            ps.setString(3, echipa.getNume());
            ps.setBytes(4, echipa.getImagine());
            ps.setBoolean(5, echipa.isDeleted());

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "Creating echipa failed, no rows affected.";
            }
            else{
                return "Echipa added successfully";
            }

        } catch (SQLException e) {
            return "Failed to add echipa - " + e.getMessage();
        }
    }

    public String deleteEchipa(Long echipaID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Echipa WHERE echipaId = ?")) {

            ps.setLong(1, echipaID);


            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "No echipa found with ID: "+echipaID;
            }
            else{
                return "Echipa with ID " + echipaID + " deleted successfully";
            }

        } catch (SQLException e) {
            return "Failed to delete echipa - " + e.getMessage();
        }
    }
    public Echipa getEchipa(Long echipaID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Echipa WHERE echipaID = ?")) {
            ps.setLong(1, echipaID);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Echipa echipa = new Echipa(
                        rs.getLong("echipaid"),
                        rs.getString("categorie"),
                        rs.getString("nume"),
                        rs.getBytes("imagine"),
                        rs.getBoolean("isDeleted")
                );
                return echipa;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public List<Echipa> getEchipaNume(String nume) {
        List<Echipa> echipe  = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Echipa WHERE nume = ?")) {
            ps.setString(1, nume);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Echipa echipa = new Echipa(
                        rs.getLong("echipaid"),
                        rs.getString("categorie"),
                        rs.getString("nume"),
                        rs.getBytes("imagine"),
                        rs.getBoolean("isDeleted")
                );

                echipe.add(echipa);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return echipe;
    }
    public List<Echipa> getEchipaCategorie(String categorie) {
        List<Echipa> echipe  = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Echipa WHERE categorie = ?")) {
            ps.setString(1, categorie);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Echipa echipa = new Echipa(
                        rs.getLong("echipaid"),
                        rs.getString("categorie"),
                        rs.getString("nume"),
                        rs.getBytes("imagine"),
                        rs.getBoolean("isDeleted")
                );

                echipe.add(echipa);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return echipe;
    }
    public String updateEchipa(Long echipaID, Echipa echipa) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {

            String updateQuery = "UPDATE echipa SET echipaid=?, categorie=?, nume=?, imagine=?,isdeleted=?\n" +
                    "\t WHERE echipaid=?";

            try (PreparedStatement ps = conn.prepareStatement(updateQuery)) {

                ps.setLong(1, echipa.getEchipaId());
                ps.setString(2, echipa.getCategorie());
                ps.setString(3, echipa.getNume());
                ps.setBytes(4, echipa.getImagine());
                ps.setBoolean(5, echipa.isDeleted());
                ps.setLong(6, echipa.getEchipaId());

                int affectedRows = ps.executeUpdate();

                if (affectedRows == 0) {
                    return "No echipa found with ID: " + echipaID;
                } else {
                    return "Echipa with ID " + echipaID + " updated successfully";
                }
            }
        } catch (SQLException e) {
            return "Failed to update echipa - " + e.getMessage();
        }
    }
}
