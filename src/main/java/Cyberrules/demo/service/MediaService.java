package Cyberrules.demo.service;
import Cyberrules.demo.model.Media;
import org.springframework.stereotype.Service;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class MediaService {
    private static final String URL = "jdbc:postgresql://localhost:5432/cyberrules";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";

    public List<Media> getMedia() {
        List<Media> medias = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM Media")) {

            while (rs.next()) {
                Media media = new Media(
                        rs.getLong("mediaID"),
                        rs.getString("tipmedia"),
                        rs.getLong("stireID"),
                        rs.getBytes("media"),
                        rs.getBoolean("isDeleted")

                );

                medias.add(media);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return medias;
    }

    public String addMedia(Media media)
    {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO media(tipmedia, stireid, media, isdeleted) VALUES ( ?, ?, ?, ?) ",
                     Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, media.getTipmedia());
            ps.setLong(2, media.getStireId());
            ps.setBytes(3, media.getMedia());
            ps.setBoolean(4, media.isDeleted());

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "Creating media failed, no rows affected.";
            }
            else{
                return "Media added successfully";
            }

        } catch (SQLException e) {
            return "Failed to add media - " + e.getMessage();
        }
    }

    public String deleteMedia(Long mediaID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Media WHERE mediaId = ?")) {

            ps.setLong(1, mediaID);


            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "No media found with ID: "+mediaID;
            }
            else{
                return "Media with ID " + mediaID + " deleted successfully";
            }

        } catch (SQLException e) {
            return "Failed to delete media - " + e.getMessage();
        }
    }
    public Media getMedia(Long mediaID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Media WHERE mediaID = ?")) {
            ps.setLong(1, mediaID);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Media media = new Media(
                        rs.getLong("mediaID"),
                        rs.getString("tipmedia"),
                        rs.getLong("stireID"),
                        rs.getBytes("media"),
                        rs.getBoolean("isDeleted")

                );
                return media;


            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public List<Media> getTipMedia(String tipmedia) {
        List<Media> medias  = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Media WHERE tipmedia = ?")) {
            ps.setString(1, tipmedia);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Media media = new Media(
                        rs.getLong("mediaID"),
                        rs.getString("tipmedia"),
                        rs.getLong("stireID"),
                        rs.getBytes("media"),
                        rs.getBoolean("isDeleted")

                );

                medias.add(media);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return medias;
    }

    public String updateMedia(Long mediaID, Media media) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {

            String updateQuery = "UPDATE media\n" +
                    "\tSET  tipmedia=?, stireid=?, isdeleted=?, media=?\n" +
                    "\tWHERE mediaid=?";

            try (PreparedStatement ps = conn.prepareStatement(updateQuery)) {

                ps.setString(1, media.getTipmedia());
                ps.setLong(2, media.getStireId());
                ps.setBytes(4, media.getMedia());
                ps.setBoolean(3, media.isDeleted());
                ps.setLong(5, mediaID);
                int affectedRows = ps.executeUpdate();

                if (affectedRows == 0) {
                    return "No media found with ID: " + mediaID;
                } else {
                    return "Media with ID " + mediaID + " updated successfully";
                }
            }
        } catch (SQLException e) {
            return "Failed to update media - " + e.getMessage();
        }
    }

}
