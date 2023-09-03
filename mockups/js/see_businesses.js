// var videoContainer = document.getElementById("video-container");
// var twoContainers = document.getElementById("two-containers");
// var questionairreContainer = document.getElementById("questionairre-container"); 
// var meetingContainer = document.getElementById("meeting-container"); 


// function toggleVideoContainer() {
//     twoContainers.hidden = !twoContainers.hidden;
//     questionairreContainer.hidden = !questionairreContainer.hidden;
//     videoContainer.hidden = !videoContainer.hidden;
// }

// function toggleQuestionairreContainer() {
//     twoContainers.hidden = !twoContainers.hidden;
//     meetingContainer.hidden = !meetingContainer.hidden;
//     videoContainer.hidden = !videoContainer.hidden;
// }

// function toggleMeetingContainer() {
//     twoContainers.hidden = !twoContainers.hidden;
//     questionairreContainer.hidden = !questionairreContainer.hidden;
//     videoContainer.hidden = !videoContainer.hidden;
// }

var videoContainer = document.getElementById("video-container");
var questionairreContainer = document.getElementById("questionairre-container"); 
var meetingContainer = document.getElementById("meeting-container"); 
var twoContainers = document.getElementById("two-containers");

function hideAllContainers() {
    videoContainer.hidden = true;
    questionairreContainer.hidden = true;
    meetingContainer.hidden = true;
}

function toggleContainer(containerType) {
    hideAllContainers();

    if (containerType === 'video') {
        videoContainer.hidden = false;
    } else if (containerType === 'question') {
        twoContainers.hidden = false;
        questionairreContainer.hidden = false;
    } else if (containerType === 'meetup') {
        meetingContainer.hidden = false;
    }
}
