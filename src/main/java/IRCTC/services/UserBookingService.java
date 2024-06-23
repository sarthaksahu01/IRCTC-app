package IRCTC.services;

import IRCTC.entities.Ticket;
import IRCTC.entities.Train;
import IRCTC.entities.User;
import IRCTC.utils.UserServiceUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UserBookingService {
    private User user;
    private static final String USERS_PATH = "src/main/java/IRCTC/localDb/users.json";
    private ObjectMapper objectMapper = new ObjectMapper();
    private List<User> userList;

    public UserBookingService(User user1) throws IOException {
        this.user = user1;
        loadUsers();
    }

    public UserBookingService() throws IOException {
        loadUsers();

    }

    public List<User> loadUsers() throws IOException{
        File  users =  new File(USERS_PATH);
        return userList = objectMapper.readValue(users, new TypeReference<List<User>>(){});
    }

    //check if current loggedin user and service invoking user are same
    public Boolean loginUser(){
        Optional<User> foundUser = userList.stream().filter(user1 -> {
            return user1.getName().equalsIgnoreCase(user.getName()) && UserServiceUtil.checkPassword(user.getPassword(), user1.getPassword());
        }).findFirst();
        return foundUser.isPresent();

    }

    public  Boolean signUp(User user1){
        try {
            userList.add(user1);
            saveUserListToFile();
            return Boolean.TRUE;
        } catch (IOException e) {
            return Boolean.FALSE;
        }
    }

    private void saveUserListToFile() throws IOException {
        File usersFile = new File(USERS_PATH);
        //we have to serialize inorder to save in users.json
        objectMapper.writeValue(usersFile, userList);
    }

    public void fetchBooking(){
        Optional<User> userFetched = userList.stream().filter(user1 -> {
            return user1.getName().equals(user.getName()) && UserServiceUtil.checkPassword(user.getPassword(), user1.getHashPassword());
        }).findFirst();
        if(userFetched.isPresent()){
            userFetched.get().printTickets();
        }
    }

    public Boolean cancelBooking(String ticketId) throws IOException{
//        List<Ticket> ticketList = user.getTicketsBooked();
//        Optional<Ticket> foundTicket = ticketList.stream().filter(ticket -> ticket.getTicketId().equals(ticketId)).findFirst();
//        if(foundTicket.isPresent()){
//            ticketList.remove(foundTicket.get());
//            System.out.println("Ticket ID: " + foundTicket.get() + " Canceled");
//            saveUserListToFile();
//            return Boolean.TRUE;
//        }
//        System.out.println("No ticket found");
//        return Boolean.FALSE;
        List<Ticket> tickets = user.getTicketsBooked();
        if(!tickets.isEmpty()){

            for(Ticket ticket : tickets){
                if(ticket.getTicketId().equals(ticketId)){
                    System.out.println("Ticket ID: " + ticket.getTicketId() + " Canceled");
                    tickets.remove(ticket);
                    return true;
                }
            }
            System.out.println("Ticket do not match");

        }
        return Boolean.FALSE;
    }

    public List<Train> getTrains(String sourceStation, String destinationStation) {
        try {
            TrainService trainService = new TrainService();
            return trainService.searchTrains(sourceStation, destinationStation);
        }catch(IOException e){
            return new ArrayList<>();
        }

    }


    public List<List<Integer>> fetchSeats(Train trainSelectedForBooking) {
        return trainSelectedForBooking.getSeats();
    }

    public Boolean bookTrainSeat(Train train, int row, int seat) {
        try{
            TrainService trainService = new TrainService();
            List<List<Integer>> seats = train.getSeats();
            if (row >= 0 && row < seats.size() && seat >= 0 && seat < seats.get(row).size()) {
                if (seats.get(row).get(seat) == 0) {
                    seats.get(row).set(seat, 1);
                    train.setSeats(seats);
//                    trainService.addTrain(train);
                    return true; // Booking successful
                } else {
                    return false; // Seat is already booked
                }
            } else {
                return false; // Invalid row or seat index
            }
        }catch (IOException ex){
            return Boolean.FALSE;
        }
    }
}
