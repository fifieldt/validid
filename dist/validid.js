// Generated by CoffeeScript 2.4.1
(function() {
  /*
  Validid is open source in:
  https://github.com/Edditoria/validid

  under MIT license:
  https://github.com/Edditoria/validid/blob/master/LICENSE.md
  */
  var Validid, validid;

  Validid = (function() {
    class Validid {
      //   #####  #     # ### ######
      //  #     # ##    #  #  #     #
      //  #       # #   #  #  #     #
      //  #       #  #  #  #  #     #
      //  #       #   # #  #  #     #
      //  #     # #    ##  #  #     #
      //   #####  #     # ### ######
      cnid(id) {
        var isChecksumValid, isDateValid, isFormatValid, isLengthValid;
        // the 2nd generation of China ID Card
        // format of card ID: LLLLLLYYYYMMDD000X
        isLengthValid = function(id) {
          return id.length === 18;
        };
        isFormatValid = function(id) {
          return /^[0-9]{17}[0-9X]$/.test(id);
        };
        // assume the oldest Chinese, Luo Meizhen, was born in 25 Jun, 1886 and he had an ID card
        // source: http://www.scmp.com/news/china/article/1297022/uygur-alimihan-seyiti-age-127-may-set-record-oldest-person-alive
        isDateValid = () => {
          return this.tools.isDateValid(id.substring(6, 14), '18860625');
        };
        isChecksumValid = function(id) {
          var char, checkDigit, getWeight, i, identifier, index, len, remainder, weightedSum;
          // adapts ISO 7064:1983.MOD 11-2
          identifier = id.slice(0, -1);
          checkDigit = id.slice(-1) === 'X' ? 10 : +id.slice(-1);
          getWeight = function(n) {
            return Math.pow(2, n - 1) % 11;
          };
          weightedSum = 0;
          index = id.length;
          for (i = 0, len = identifier.length; i < len; i++) {
            char = identifier[i];
            weightedSum += +char * getWeight(index);
            index--;
          }
          remainder = (12 - weightedSum % 11) % 11 - checkDigit;
          return remainder === 0;
        };
        id = this.tools.normalize(id);
        return isLengthValid(id) && isFormatValid(id) && isDateValid() && isChecksumValid(id);
      }

      
      //  ##### #    # # #####
      //    #   #    # # #    #
      //    #   #    # # #    #
      //    #   # ## # # #    #
      //    #   ##  ## # #    #
      //    #   #    # # #####
      twid(id) {
        var isChecksumValid, isFormatValid, isLengthValid;
        // format of Taiwan ID: A123456789
        isLengthValid = function(id) {
          return id.length === 10;
        };
        isFormatValid = function(id) {
          return /^[A-Z][12][0-9]{8}$/.test(id);
        };
        isChecksumValid = function(id) {
          var char, i, idLen, idTail, len, letterIndex, letterValue, letters, remainder, weight, weightedSum;
          idLen = id.length;
          // each letter represents value from [10..35]
          letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
          letterIndex = letters.indexOf(id[0]) + 10;
          letterValue = Math.floor(letterIndex / 10) + (letterIndex % 10) * (idLen - 1);
          idTail = id.slice(1); // drop the letter
          weight = idLen - 2; // minus letter digit and check digit
          weightedSum = 0;
          for (i = 0, len = idTail.length; i < len; i++) {
            char = idTail[i];
            weightedSum += +char * weight;
            weight--;
          }
          // note: the check digit of 'id' is weighted 0
          remainder = (letterValue + weightedSum + +id.slice(-1)) % 10;
          return remainder === 0;
        };
        id = this.tools.normalize(id);
        return isLengthValid(id) && isFormatValid(id) && isChecksumValid(id);
      }

      
      //  #    # #    # # #####
      //  #    # #   #  # #    #
      //  ###### ####   # #    #
      //  #    # #  #   # #    #
      //  #    # #   #  # #    #
      //  #    # #    # # #####
      hkid(id) {
        var getLetterValue, isChecksumValid, isFormatValid, isLengthValid, isLetter;
        // format of HKID: X123456(A) or XY123456(A)
        getLetterValue = function(letter) {
          // charCode = { A: 65, B: 66... Z: 90 }
          // HKID     = { A: 10, B: 11... Z: 35 }
          // diff = 55
          return letter.charCodeAt(0) - 55;
        };
        isLetter = function(char) {
          return /[a-zA-Z]/.test(char);
        };
        isLengthValid = function(id) {
          return id.length === 8 || id.length === 9;
        };
        isFormatValid = function(id) {
          return /^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(id);
        };
        isChecksumValid = function(id) {
          var char, charValue, checkDigit, i, identifier, len, remainder, weight, weightedSum;
          // check digit algorithm is variation of the ISBN-10 check digit algorithm
          // for each character (except the last digit): character * weight
          // weight from largest to smallest (1)
          // if ID is 8 character long, a space is added to the beginning
          // value of space is 36, hence 36 * 9 = 324
          weight = id.length;
          weightedSum = weight === 8 ? 324 : 0;
          identifier = id.slice(0, -1);
          checkDigit = id.slice(-1) === 'A' ? 10 : +id.slice(-1);
          for (i = 0, len = identifier.length; i < len; i++) {
            char = identifier[i];
            charValue = isLetter(char) ? getLetterValue(char) : +char;
            weightedSum += charValue * weight;
            weight--;
          }
          remainder = (weightedSum + checkDigit) % 11;
          return remainder === 0;
        };
        id = this.tools.normalize(id);
        return isLengthValid(id) && isFormatValid(id) && isChecksumValid(id);
      }

      
      //  #    # #####  # #####
      //  #   #  #    # # #    #
      //  ####   #    # # #    #
      //  #  #   #####  # #    #
      //  #   #  #   #  # #    #
      //  #    # #    # # #####
      krid(id) {
        var isChecksumValid, isDateValid, isFormatValid, isLengthValid;
        // format of South Korea ID card: YYMMDD-SBBBBNC
        isLengthValid = function(id) {
          return id.length === 13;
        };
        isFormatValid = function(id) {
          return /^[0-9]{13}$/.test(id);
        };
        isDateValid = (id) => {
          var date, maxDate, sDigit, yearPrefix;
          // parse the date into 'YYYYMMDD' according to 'S' digit
          sDigit = id.substring(6, 7);
          yearPrefix = (function() {
            switch (sDigit) {
              case '1':
              case '2':
              case '5':
              case '6':
                return '19';
              case '3':
              case '4':
              case '7':
              case '8':
                return '20';
              default:
                return '18';
            }
          })();
          date = yearPrefix + id.substring(0, 6);
          maxDate = this.tools.getMaxDate(17); // 17 years old to register for an ID
          return this.tools.isDateValid(date, 'default', maxDate);
        };
        isChecksumValid = function(id) {
          var char, i, index, len, remainder, weight, weightedSum;
          weight = [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            2,
            3,
            4,
            5,
            0 // add 0 for check digit
          ];
          weightedSum = 0;
          index = 0;
          for (i = 0, len = id.length; i < len; i++) {
            char = id[i];
            weightedSum += +char * weight[index];
            index++;
          }
          remainder = (11 - weightedSum % 11) % 10 - +id.slice(-1);
          return remainder === 0;
        };
        id = this.tools.normalize(id);
        return isLengthValid(id) && isFormatValid(id) && isDateValid(id) && isChecksumValid(id);
      }

    };

    
    //  #####  ####   ####  #       ####
    //    #   #    # #    # #      #
    //    #   #    # #    # #       ####
    //    #   #    # #    # #           #
    //    #   #    # #    # #      #    #
    //    #    ####   ####  ######  ####
    Validid.prototype.tools = {
      normalize: function(id) {
        var re;
        // make id toUpperCase
        // remove '-' and '/' at any position
        // remove whitespace
        // remove '(' and ')' at the end of the string
        re = /[-\/\s]/g;
        id = id.toUpperCase().replace(re, '');
        re = /\([A-Z0-9]\)$/;
        if (re.test(id)) {
          id = id.replace(/[\(\)]/g, '');
        }
        return id;
      },
      isDateValid: function(idDate, minDate = 'default', maxDate = 'today') {
        var isFormatValid, parseDate;
        // idDate, minDate should be in format 'YYYYMMDD'
        // maxDate can be 'YYYYMMDD' or a Date()
        // process:
        // - check day and month
        // - is not a future date
        // - is between minDate and maxDate
        // - any step is false, will interrupt and return false
        // !important note about the default minDate:
        // - assumed that only a living person can register for something
        // - providing ID number for a dead person is NOT the case
        // - so, minDate is the birth date of world's "living" person verified
        // - NOT a dead person who does not act on internet
        // - source: https://en.wikipedia.org/wiki/Oldest_people
        if (minDate === 'default' || minDate === '') {
          minDate = '18991129';
        }
        // 1. check and parse idDate and minDate
        isFormatValid = function(date) {
          return typeof date === 'string' && /^[0-9]{8}$/.test(date);
        };
        if (!isFormatValid(idDate)) {
          return false;
        }
        if (!isFormatValid(minDate)) {
          return false;
        }
        parseDate = function(input) {
          var date, day, isDayValid, isFutureDate, isLeapYear, isMonthValid, maxDay, month, startIndex, year;
          // input is string 'YYYYMMDD'
          // return false asap, else return a Date obj
          startIndex = 0;
          year = +input.substring(startIndex, startIndex += 4); // number
          month = input.substring(startIndex, startIndex += 2); // string
          day = +input.substring(startIndex, startIndex += 2); // number
          date = new Date(year, +month - 1, day); // a Date object
          
          // 2. is day valid?
          maxDay = '01,03,05,07,08,10,12'.indexOf(month) >= 0 ? 31 : '04,06,09,11'.indexOf(month) >= 0 ? 30 : (isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0), isLeapYear ? 29 : 28); // do not use Array.indexOf() because of suck IE
          isDayValid = day > 0 && day <= maxDay;
          if (!isDayValid) {
            return false;
          }
          // 3. is month valid?
          isMonthValid = +month > 0 && +month <= 12;
          if (!isMonthValid) {
            return false;
          }
          // 4. is date a future date?
          isFutureDate = new Date() < date;
          if (isFutureDate) {
            return false;
          }
          // else case
          return date; // Date object
        };
        idDate = parseDate(idDate);
        if (idDate === false) {
          return false;
        }
        minDate = parseDate(minDate);
        if (minDate === false) {
          return false;
        }
        maxDate = maxDate === 'today' ? new Date() : typeof maxDate === 'string' ? parseDate(maxDate) : maxDate;
        if (maxDate === false) {
          return false;
        }
        // 5. finally, check if the idDate falls between minDate and maxDate
        return (idDate >= minDate) && (idDate <= maxDate);
      },
      getMaxDate: function(yearsOld) {
        var now, year;
        // yearsOld should be a whole number
        // return Date() object
        // useful for puting maxDate in isDateValid()
        now = new Date();
        year = now.getFullYear() - yearsOld;
        return new Date(year, now.getMonth(), now.getDate());
      }
    };

    return Validid;

  }).call(this);

  
  //  ###### #    # #####   ####  #####  #####
  //  #       #  #  #    # #    # #    #   #
  //  #####    ##   #    # #    # #    #   #
  //  #        ##   #####  #    # #####    #
  //  #       #  #  #      #    # #   #    #
  //  ###### #    # #       ####  #    #   #
  validid = new Validid();

  if ((typeof module !== "undefined" && module !== null) && module.exports) {
    module.exports = validid;
  }

  if (typeof window !== "undefined" && window !== null) {
    window.validid = validid;
  }

}).call(this);
