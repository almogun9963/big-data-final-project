module.exports.directions = Object.freeze({
    EAST:   1,
    WEST:   2
});

module.exports.car_types = Object.freeze({
    PRIVATE:   1,
    VAN:       2,
    TRUCK:     3
}); 

module.exports.days = Object.freeze({
    SUN:  1,
    MON:  2,
    TUE:  3,
    WED:  4,
    THU:  5,
    FRI:  6,
    SAT:  7
}); 

module.exports.event_types = Object.freeze({
    ROAD_ENTER:     1,
    SECTION_ENTER:  2,
    ROAD_EXIT:      3,
    SECTION_EXIT:   4
});

module.exports.sections = Object.freeze({
    ONE:   1,
    TWO:   2,
    TREE:  3,
    FOUR:  4,
    FIVE:  5,
    EXIT: 0
});
