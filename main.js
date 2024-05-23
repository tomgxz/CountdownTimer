const finish_time_hour = 13,
      finish_time_minutes = 0,
      finish_time_seconds = 0,
      until_text = "until lunch";

$("h2").text(until_text)

var timer_finished = false;

var interval = setInterval(function () {

    let current_time_object = new Date(),

        current_time_hour = current_time_object.getHours(),
        current_time_minutes = current_time_object.getMinutes(),
        current_time_seconds = current_time_object.getSeconds(),

        remaining_hour = finish_time_hour - current_time_hour,
        remaining_minutes = finish_time_minutes - current_time_minutes, 
        remaining_seconds = finish_time_seconds - current_time_seconds, 
        remaining_string;

    if (current_time_minutes > finish_time_minutes) {
        remaining_hour -= 1
        remaining_minutes = finish_time_minutes + 60 - current_time_minutes
    }

    if (current_time_seconds > finish_time_seconds) {
        remaining_minutes -= 1

        if (remaining_minutes < 0) {
            remaining_minutes += 60
            remaining_hour -= 1
        }

        remaining_seconds = finish_time_seconds + 60 - current_time_seconds
    }

    if (remaining_hour < 0) timer_finished = true

    remaining_hour = remaining_hour.toString()
    remaining_minutes = remaining_minutes.toString()
    remaining_seconds = remaining_seconds.toString()

    if (remaining_hour.length <= 1) remaining_hour = `0${remaining_hour}`
    if (remaining_minutes.length <= 1) remaining_minutes = `0${remaining_minutes}`
    if (remaining_seconds.length <= 1) remaining_seconds = `0${remaining_seconds}`

    remaining_string = `${remaining_hour}:${remaining_minutes}:${remaining_seconds}`

    if (remaining_hour == "00") {
        remaining_string = `${remaining_minutes}:${remaining_seconds}`

        if (remaining_minutes == "00") {
            remaining_string = `00:${remaining_seconds}`
        }
    }

    $("h1").text(remaining_string)

    if (timer_finished) {
        $("h1").text("00:00")
        $("h1").addClass("finished")
        clearInterval(interval)
    }

}, 500)