new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["POSITIVE", "NEGATIVE", "NEUTRAL", "AMAN", "AGARWAL"],
      datasets: [{
        labels: "YEH NAI CHAL RAHA",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [20,40,20,40,20]
      },
	  
	  ]
    },
	
    options: {
      title: {
        display: true,
        text: 'Analysis on News'
      }
    }
});