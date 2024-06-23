package IRCTC.services;

import IRCTC.entities.Train;
import IRCTC.entities.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class TrainService {
    private Train train;
    private static final String TRAIN_PATH = "IRCTC App/src/main/java/IRCTC/entities/localDB/trains.json";
    private ObjectMapper objectMapper = new ObjectMapper();
    private List<Train> trainList;

    public TrainService(Train train) throws IOException{
        this.train = train;
        loadTrains();

    }

    public TrainService() throws IOException {
        loadTrains();
    }

    public List<Train> loadTrains() throws IOException {
        File trains =  new File(TRAIN_PATH);
        return trainList = objectMapper.readValue(trains, new TypeReference<List<Train>>(){});
    }

    public List<Train> searchTrains(String sourceStation, String destinationStation) {
        return trainList.stream().filter(train -> validTrain(train, sourceStation, destinationStation)).collect(Collectors.toList());
    }

    public boolean validTrain(Train train, String sourceStation, String destinationStation) {
        return false;
    }

    public List<List<Integer>> seatsAvailable(Train trainSelectedForBooking) {
        List<List<Integer>> seats = new ArrayList<>();
        List<Integer> row = new ArrayList<>(Arrays.asList(0, 0, 0, 0, 0));
        for(int i = 1; i < 5; i++){
            seats.add(row);
        }
        return seats;
    }

}
