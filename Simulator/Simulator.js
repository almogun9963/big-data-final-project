const enums = require("./Enums");
var EventObj = require("./Event");
const kafka = require('./kafkaProduce');

class Simulator{
    
    makeEvent(){
        
        let ran_num_direction = Math.floor(Math.random() * 2) + 1;
        
        let ran_num_car_type = Math.floor(Math.random() * 3) + 1;
        
        let ran_num_section = Math.floor(Math.random() * 5) + 1;
        
        let car_num = Math.floor(Math.random() * 100000);
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let event = new EventObj.EventObj(car_num, enums.event_types.ROAD_ENTER, ran_num_section, ran_num_direction, ran_num_car_type, this.day, time, this.is_special, ran_num_section);
        this.sendEvent(event.toString());
        event.setEventKind(enums.event_types.SECTION_ENTER);
        setTimeout(() => {this.sendEvent(event.toString());}, 100);
        setTimeout(() => { this.carRoute(event); }, 90000);
    }
    carRoute(event){
            if(event.getSection() === enums.sections.FIVE && event.getDirection() === enums.directions.WEST)
                this.exit(event);
            
            else if(event.getSection() === enums.sections.ONE && event.getDirection() === enums.directions.EAST)
                this.exit(event);

            else if(event.getCarKind() === enums.car_types.TRUCK)
                this.truckWay(event);
            
            else if(event.getCarKind() === enums.car_types.PRIVATE)
                this.privateWay(event);
            
            else if(event.getCarKind() === enums.car_types.VAN)
                this.vanWay(event);
    }

    truckWay(event){
        let random_num =  Math.floor(Math.random() * 10) + 1;
        if(random_num > 1){
            this.nextSection(event);
            setTimeout(() => { this.carRoute(event); }, 20000);
        }
        else{
            this.exit(event);
        }
    }

    privateWay(event){
        let random_num =  Math.floor(Math.random() * 10) + 1;
        if(Math.abs(event.getSection() - event.getFirstSection()) < 2){
            if(random_num > 1){
                this.nextSection(event);
                setTimeout(() => { this.carRoute(event); }, 20000);
            }
            else{
                this.exit(event);
            }
        }
        else{
            random_num =  Math.floor(Math.random() * 10) + 1;
            if(random_num <= 3){
                this.nextSection(event);
                setTimeout(() => { this.carRoute(event); }, 20000);
            }
            else{
                this.exit(event);
            }
        }
        
        
    }

    vanWay(event){
        let random_num =  Math.floor(Math.random() * 10) + 1;
        if(random_num > 3){
            this.nextSection(event);
            setTimeout(() => { this.carRoute(event); }, 20000);
        }
        else{
            this.exit(event);
        }
    }

    sendEvent(event_string){setTimeout(() => { kafka.publish(event_string); }, 400);}

    nextSection(event){
        event.setDay(this.day);
        event.setEventKind(enums.event_types.SECTION_EXIT);
        let today = new Date();
        event.setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        this.sendEvent(event.toString());
        //If direction is west, the direction is from section one to five.
        let section = (event.getDirection() === enums.directions.WEST)? event.getSection() + 1 : event.getSection() - 1;
        event.setSection(section);
        event.setEventKind(enums.event_types.SECTION_ENTER);
        setTimeout(() => {this.sendEvent(event.toString());}, 100);
        
    }
    exit(event){
        event.setDay(this.day);
        event.setEventKind(enums.event_types.SECTION_EXIT);
        let today = new Date();
        event.setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        this.sendEvent(event.toString());
        event.setEventKind(enums.event_types.ROAD_EXIT);
        setTimeout(() => {this.sendEvent(event.toString());}, 100);
       
    }

    run(){
        this.day = enums.days.SUN;
        this.is_special = false;
        setInterval(() => {
            this.day = ((this.day + 1) % 7);
            if(this.day === 0)
                this.day = enums.days.SAT; 
            if(Math.floor(Math.random()*10) === 0)
                this.is_special = true;
            else
                this.is_special = false;
        } , 1000000);
        setInterval(() => {this.makeEvent();}, 10000); 
    }
}
new Simulator().run();
