package IRCTC.entities;

import lombok.Getter;
import lombok.Setter;

import java.sql.Time;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class Train {
    private String trainId;
    private String trainName;
    private String trainNumber;
    private List<List<Integer>> seats;
    private Map<String, String> stationTimes;
    private List<String> stations;

    public Train(String trainId, String trainName, String trainNumber, List<List<Integer>> seats, Map<String, String> stationTimes, List<String> stations) {
        this.trainId = trainId;
        this.trainName = trainName;
        this.trainNumber = trainNumber;
        this.seats = seats;
        this.stationTimes = stationTimes;
        this.stations = stations;
    }

    public Train() {}
    public String printTrainInfo(){
        return String.format("Train ID: %s Train number: %s", trainId, trainNumber);
    }
}
