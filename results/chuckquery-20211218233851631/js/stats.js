var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1990",
        "ok": "1980",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "20013"
    },
    "maxResponseTime": {
        "total": "20030",
        "ok": "19593",
        "ko": "20030"
    },
    "meanResponseTime": {
        "total": "4173",
        "ok": "4093",
        "ko": "20022"
    },
    "standardDeviation": {
        "total": "5376",
        "ok": "5270",
        "ko": "7"
    },
    "percentiles1": {
        "total": "413",
        "ok": "341",
        "ko": "20025"
    },
    "percentiles2": {
        "total": "8074",
        "ok": "7976",
        "ko": "20028"
    },
    "percentiles3": {
        "total": "15342",
        "ok": "15225",
        "ko": "20030"
    },
    "percentiles4": {
        "total": "19450",
        "ok": "19126",
        "ko": "20030"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1024,
    "percentage": 51
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 931,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.333",
        "ok": "66",
        "ko": "0.333"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "1000",
        "ok": "990",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "367",
        "ok": "367",
        "ko": "20013"
    },
    "maxResponseTime": {
        "total": "20030",
        "ok": "19593",
        "ko": "20030"
    },
    "meanResponseTime": {
        "total": "8275",
        "ok": "8156",
        "ko": "20022"
    },
    "standardDeviation": {
        "total": "4867",
        "ok": "4746",
        "ko": "7"
    },
    "percentiles1": {
        "total": "8051",
        "ok": "7978",
        "ko": "20025"
    },
    "percentiles2": {
        "total": "11234",
        "ok": "11121",
        "ko": "20028"
    },
    "percentiles3": {
        "total": "18670",
        "ok": "18448",
        "ko": "20030"
    },
    "percentiles4": {
        "total": "19597",
        "ok": "19450",
        "ko": "20030"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 931,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33",
        "ko": "0.333"
    }
}
    },"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "990",
        "ok": "990",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles1": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles2": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles3": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles4": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 990,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
