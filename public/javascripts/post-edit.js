// find postEditForm
let postEditForm = document.getElementById("postEditForm");
// add submit listener for form 
postEditForm.addEventListener("submit", (e) => {
    //find length of uploaded images;
    let imageUploads = document.getElementById("imageUpload").files.length;
    //find total number if existing images
    let existingImages = document.querySelectorAll(".imageDeleteCheckbox").length;
    //find total number of potential deletions
    let imageDeletions = document.querySelectorAll('.imageDeleteCheckbox:checked').length;

    //figure out if form can be submitted or not
    let newTotal = existingImages - imageDeletions + imageUploads;
    if(newTotal > 4){
        e.preventDefault();
        let removalAmount = newTotal-4
        alert(`You need to remove at least ${removalAmount} (more) image${removalAmount === 1 ? '' : 's'}!`);
    }
});