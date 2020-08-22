const minutes = [
    "one minute",
    "two minutes",
    "three minutes",
    "four minutes",
    "five minutes",
    "six minutes",
    "seven minutes",
    "eight minutes",
    "nine minutes",
    "ten minutes",
    "eleven minutes",
    "twelve minutes",
    "thirteen minutes",
    "fourteen minutes",
    "quarter",
    "sixteen minutes",
    "seventeen minutes",
    "eighteen minutes",
    "nineteen minutes",
    "twenty minutes",
    "twenty one minutes",
    "twenty two minutes",
    "twenty three minutes",
    "twenty four minutes",
    "twenty five minutes",
    "twenty six minutes",
    "twenty seven minutes",
    "twenty eight minutes",
    "twenty nine minutes",
    "half"
]
const hours = [ 
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
]

if(m == 0) console.log(hours[h-1], " o' clock")
else if(m <= 30) console.log(minutes[m-1], " past ", hours[h-1])
else console.log(minutes[60-m-1], " to", hours[h])