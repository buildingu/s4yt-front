var videoContainer = document.getElementById("video-container");
var twoContainers = document.getElementById("two-containers");
var questionairreContainer = document.getElementById("questionairre-container"); 
var meetingContainer = document.getElementById("meeting-container"); 


function toggleVideoContainer() {
    twoContainers.hidden = !twoContainers.hidden;
    questionairreContainer.hidden = !questionairreContainer.hidden;
    videoContainer.hidden = !videoContainer.hidden;
}

function toggleQuestionairreContainer() {
    twoContainers.hidden = !twoContainers.hidden;
    meetingContainer.hidden = !meetingContainer.hidden;
    videoContainer.hidden = !videoContainer.hidden;
}

function toggleMeetingContainer() {
    twoContainers.hidden = !twoContainers.hidden;
    questionairreContainer.hidden = !questionairreContainer.hidden;
    videoContainer.hidden = !videoContainer.hidden;
}