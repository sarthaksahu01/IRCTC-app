package IRCTC.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Ticket {
    private String ticketId;
    private String userId;
    private String source;
    private String destination;
    private Date dateOfTravel;
    private Train trainId;

    public Ticket(String ticketId, String userId, String source, String destination, Date dateOfTravel, Train trainId) {
        this.ticketId = ticketId;
        this.userId = userId;
        this.source = source;
        this.destination = destination;
        this.dateOfTravel = dateOfTravel;
        this.trainId = trainId;
    }

    public String getTicketInfo() {
        return String.format("Ticket ID: %s belong to user ID: %s travelling from source: %s to destination: %s", ticketId, userId, source, destination);
    }
}
