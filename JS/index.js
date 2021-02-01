function cal_percentage(){
    var marks_obtained = Number(document.getElementById('marks_obtained').value);
    var outoff = Number(document.getElementById('outoff').value);

    var res = (marks_obtained / outoff) * 100;
    document.getElementById('result').value = res;
    alert('Obtained Percentage is ' + res + '%')
}