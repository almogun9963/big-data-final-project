
/**
*  Predictor for day from model/61027a30c5f95309200dc102
*  Predictive model by BigML - Machine Learning Made Easy
*/
module.exports = {
    predictDay: function(first_section, car_number, car_kind, section, direction, is_special_day, timeSecond, timeMinute, timeHour) {
    if (timeMinute == null) {
        return 3.83502;
    }
    else if (timeMinute > 6) {
        if (timeMinute > 10) {
            if (timeMinute > 18) {
                if (timeMinute > 21) {
                    if (timeMinute > 29) {
                        if (timeMinute > 47) {
                            if (timeMinute > 54) {
                                if (car_number == null) {
                                    return 2.28409;
                                }
                                else if (car_number > 95671) {
                                    return 7;
                                }
                                else if (car_number <= 95671) {
                                    if (timeSecond == null) {
                                        return 2.17442;
                                    }
                                    else if (timeSecond > 9) {
                                        if (timeMinute > 56) {
                                            if (timeMinute > 58) {
                                                return 3;
                                            }
                                            else if (timeMinute <= 58) {
                                                if (timeSecond > 50) {
                                                    return 3;
                                                }
                                                else if (timeSecond <= 50) {
                                                    if (car_kind == null) {
                                                        return 2.10714;
                                                    }
                                                    else if (car_kind > 2) {
                                                        if (timeSecond > 39) {
                                                            return 3;
                                                        }
                                                        else if (timeSecond <= 39) {
                                                            return 2;
                                                        }
                                                    }
                                                    else if (car_kind <= 2) {
                                                        return 2;
                                                    }
                                                }
                                            }
                                        }
                                        else if (timeMinute <= 56) {
                                            return 1;
                                        }
                                    }
                                    else if (timeSecond <= 9) {
                                        if (timeMinute > 55) {
                                            if (timeSecond > 3) {
                                                return 1.8;
                                            }
                                            else if (timeSecond <= 3) {
                                                return 3;
                                            }
                                        }
                                        else if (timeMinute <= 55) {
                                            return 7;
                                        }
                                    }
                                }
                            }
                            else if (timeMinute <= 54) {
                                if (timeMinute > 51) {
                                    if (timeMinute > 53) {
                                        return 7;
                                    }
                                    else if (timeMinute <= 53) {
                                        if (section == null) {
                                            return 6.06667;
                                        }
                                        else if (section > 4) {
                                            return 7;
                                        }
                                        else if (section <= 4) {
                                            if (is_special_day == null) {
                                                return 5.96296;
                                            }
                                            else if (is_special_day=="true") {
                                                return 5;
                                            }
                                            else if (is_special_day=="false") {
                                                if (timeSecond == null) {
                                                    return 6.04;
                                                }
                                                else if (timeSecond > 56) {
                                                    return 7;
                                                }
                                                else if (timeSecond <= 56) {
                                                    return 6;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (timeMinute <= 51) {
                                    if (is_special_day == null) {
                                        return 4.375;
                                    }
                                    else if (is_special_day=="false") {
                                        if (timeMinute > 48) {
                                            return 4;
                                        }
                                        else if (timeMinute <= 48) {
                                            if (timeSecond == null) {
                                                return 3.625;
                                            }
                                            else if (timeSecond > 41) {
                                                return 4;
                                            }
                                            else if (timeSecond <= 41) {
                                                return 3;
                                            }
                                        }
                                    }
                                    else if (is_special_day=="true") {
                                        return 5;
                                    }
                                }
                            }
                        }
                        else if (timeMinute <= 47) {
                            if (timeMinute > 30) {
                                if (timeMinute > 46) {
                                    if (first_section == null) {
                                        return 2.9;
                                    }
                                    else if (first_section > 4) {
                                        return 2;
                                    }
                                    else if (first_section <= 4) {
                                        return 3;
                                    }
                                }
                                else if (timeMinute <= 46) {
                                    if (timeMinute > 44) {
                                        if (timeSecond == null) {
                                            return 1.86207;
                                        }
                                        else if (timeSecond > 24) {
                                            return 2;
                                        }
                                        else if (timeSecond <= 24) {
                                            if (timeMinute > 45) {
                                                return 2;
                                            }
                                            else if (timeMinute <= 45) {
                                                return 1;
                                            }
                                        }
                                    }
                                    else if (timeMinute <= 44) {
                                        if (car_number == null) {
                                            return 1.2875;
                                        }
                                        else if (car_number > 20111) {
                                            if (timeHour == null) {
                                                return 1.20833;
                                            }
                                            else if (timeHour > 17) {
                                                if (is_special_day == null) {
                                                    return 1.36585;
                                                }
                                                else if (is_special_day=="false") {
                                                    return 2;
                                                }
                                                else if (is_special_day=="true") {
                                                    return 1;
                                                }
                                            }
                                            else if (timeHour <= 17) {
                                                return 1;
                                            }
                                        }
                                        else if (car_number <= 20111) {
                                            return 2;
                                        }
                                    }
                                }
                            }
                            else if (timeMinute <= 30) {
                                if (is_special_day == null) {
                                    return 4;
                                }
                                else if (is_special_day=="false") {
                                    return 7;
                                }
                                else if (is_special_day=="true") {
                                    return 1;
                                }
                            }
                        }
                    }
                    else if (timeMinute <= 29) {
                        if (timeMinute > 25) {
                            if (timeMinute > 27) {
                                if (timeMinute > 28) {
                                    return 7;
                                }
                                else if (timeMinute <= 28) {
                                    if (timeSecond == null) {
                                        return 6.15;
                                    }
                                    else if (timeSecond > 43) {
                                        return 7;
                                    }
                                    else if (timeSecond <= 43) {
                                        return 6;
                                    }
                                }
                            }
                            else if (timeMinute <= 27) {
                                if (timeMinute > 26) {
                                    if (timeSecond == null) {
                                        return 5.76471;
                                    }
                                    else if (timeSecond > 4) {
                                        return 6;
                                    }
                                    else if (timeSecond <= 4) {
                                        return 5;
                                    }
                                }
                                else if (timeMinute <= 26) {
                                    return 5;
                                }
                            }
                        }
                        else if (timeMinute <= 25) {
                            if (timeMinute > 23) {
                                if (timeMinute > 24) {
                                    if (timeSecond == null) {
                                        return 4.5;
                                    }
                                    else if (timeSecond > 23) {
                                        return 5;
                                    }
                                    else if (timeSecond <= 23) {
                                        return 4;
                                    }
                                }
                                else if (timeMinute <= 24) {
                                    return 4;
                                }
                            }
                            else if (timeMinute <= 23) {
                                if (is_special_day == null) {
                                    return 2.92593;
                                }
                                else if (is_special_day=="true") {
                                    return 2;
                                }
                                else if (is_special_day=="false") {
                                    if (car_number == null) {
                                        return 3.13636;
                                    }
                                    else if (car_number > 15517) {
                                        return 3;
                                    }
                                    else if (car_number <= 15517) {
                                        return 4;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (timeMinute <= 21) {
                    if (is_special_day == null) {
                        return 1.47619;
                    }
                    else if (is_special_day=="false") {
                        return 1;
                    }
                    else if (is_special_day=="true") {
                        return 2;
                    }
                }
            }
            else if (timeMinute <= 18) {
                if (timeMinute > 13) {
                    if (timeSecond == null) {
                        return 5.65263;
                    }
                    else if (timeSecond > 45) {
                        if (timeMinute > 17) {
                            return 1;
                        }
                        else if (timeMinute <= 17) {
                            if (timeMinute > 14) {
                                if (timeMinute > 16) {
                                    return 7;
                                }
                                else if (timeMinute <= 16) {
                                    return 6;
                                }
                            }
                            else if (timeMinute <= 14) {
                                return 5;
                            }
                        }
                    }
                    else if (timeSecond <= 45) {
                        if (timeMinute > 16) {
                            if (car_number == null) {
                                return 6.96154;
                            }
                            else if (car_number > 16063) {
                                return 7;
                            }
                            else if (car_number <= 16063) {
                                return 6;
                            }
                        }
                        else if (timeMinute <= 16) {
                            if (timeMinute > 15) {
                                return 6;
                            }
                            else if (timeMinute <= 15) {
                                if (car_number == null) {
                                    return 5.2;
                                }
                                else if (car_number > 8483) {
                                    if (car_number > 72948) {
                                        return 6;
                                    }
                                    else if (car_number <= 72948) {
                                        return 5;
                                    }
                                }
                                else if (car_number <= 8483) {
                                    if (timeSecond > 24) {
                                        return 6;
                                    }
                                    else if (timeSecond <= 24) {
                                        return 5;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (timeMinute <= 13) {
                    if (timeMinute > 11) {
                        if (timeSecond == null) {
                            return 4.07143;
                        }
                        else if (timeSecond > 42) {
                            if (timeMinute > 12) {
                                return 5;
                            }
                            else if (timeMinute <= 12) {
                                return 4;
                            }
                        }
                        else if (timeSecond <= 42) {
                            if (timeSecond > 7) {
                                return 4;
                            }
                            else if (timeSecond <= 7) {
                                return 3;
                            }
                        }
                    }
                    else if (timeMinute <= 11) {
                        return 3;
                    }
                }
            }
        }
        else if (timeMinute <= 10) {
            if (timeMinute > 9) {
                if (timeSecond == null) {
                    return 2.7619;
                }
                else if (timeSecond > 24) {
                    return 3;
                }
                else if (timeSecond <= 24) {
                    return 2;
                }
            }
            else if (timeMinute <= 9) {
                if (timeSecond == null) {
                    return 1.56;
                }
                else if (timeSecond > 4) {
                    if (timeMinute > 8) {
                        return 2;
                    }
                    else if (timeMinute <= 8) {
                        if (car_number == null) {
                            return 1.18182;
                        }
                        else if (car_number > 18476) {
                            return 1;
                        }
                        else if (car_number <= 18476) {
                            if (car_number > 7735) {
                                return 2;
                            }
                            else if (car_number <= 7735) {
                                return 1;
                            }
                        }
                    }
                }
                else if (timeSecond <= 4) {
                    return 3.66667;
                }
            }
        }
    }
    else if (timeMinute <= 6) {
        if (timeMinute > 3) {
            if (timeMinute > 4) {
                if (direction == null) {
                    return 6.81081;
                }
                else if (direction > 1) {
                    if (timeSecond == null) {
                        return 6.3;
                    }
                    else if (timeSecond > 30) {
                        return 7;
                    }
                    else if (timeSecond <= 30) {
                        return 6;
                    }
                }
                else if (direction <= 1) {
                    return 7;
                }
            }
            else if (timeMinute <= 4) {
                return 6;
            }
        }
        else if (timeMinute <= 3) {
            if (timeMinute > 1) {
                if (timeSecond == null) {
                    return 4.97059;
                }
                else if (timeSecond > 7) {
                    if (timeSecond > 48) {
                        if (first_section == null) {
                            return 5.5;
                        }
                        else if (first_section > 3) {
                            return 6;
                        }
                        else if (first_section <= 3) {
                            return 5;
                        }
                    }
                    else if (timeSecond <= 48) {
                        return 5;
                    }
                }
                else if (timeSecond <= 7) {
                    if (car_kind == null) {
                        return 4.28571;
                    }
                    else if (car_kind > 2) {
                        return 4;
                    }
                    else if (car_kind <= 2) {
                        return 5;
                    }
                }
            }
            else if (timeMinute <= 1) {
                if (car_number == null) {
                    return 3.85294;
                }
                else if (car_number > 91189) {
                    return 3;
                }
                else if (car_number <= 91189) {
                    if (timeSecond == null) {
                        return 3.93548;
                    }
                    else if (timeSecond > 9) {
                        return 4;
                    }
                    else if (timeSecond <= 9) {
                        if (timeSecond > 7) {
                            return 3;
                        }
                        else if (timeSecond <= 7) {
                            return 4;
                        }
                    }
                }
            }
        }
    }
    return null;
}
};
