import 'crossfilter';
import 'punchcardjs';

var data, cf, weekdayCircle;

data = [{
        "datestr": "2014-06-12T09:54:00"
    }, {
        "datestr": "2014-06-15T11:10:00"
    }, {
        "datestr": "2014-06-15T11:23:00"
}];

cf = crossfilter(data);

weekdayCircle = new punchcards.WeekdayCircle(cf, 'container');
weekdayCircle.datekey = 'datestr';
weekdayCircle.defineDimensions();
weekdayCircle.draw();
