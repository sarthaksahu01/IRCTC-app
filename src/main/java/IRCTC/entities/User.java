package IRCTC.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class User {
    private String name;
    private String password;
    private String hashPassword;
    private List<Ticket> ticketsBooked;
    private String userId;

    public User(String name, String password, String hashPassword, List<Ticket> ticketsBooked, String userId) {
        this.name = name;
        this.password = password;
        this.hashPassword = hashPassword;
        this.ticketsBooked = ticketsBooked;
        this.userId = userId;
    }

    public void printTickets(){
        for(int i =0 ;i<ticketsBooked.size();i++){
//            System.out.println(ticketsBooked.get(i).toString());
            System.out.println(ticketsBooked.get(i).getTicketInfo());
        }
    }
}
