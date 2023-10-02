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
