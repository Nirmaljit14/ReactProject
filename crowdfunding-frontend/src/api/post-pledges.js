async function postPledge(amount, comment, anonymous, project) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Token ${window.localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "amount": amount,
            "comment": comment,
            "anonymous": anonymous,
            "project": 9,
        }),
    });
    if (!response.ok) {
        const fallbackError = "Error trying to post a pledge"
        const data = await response.json().catch(() => {
            throw new Error(fallbackError)
        });
        const errorMessage = data?.detail ?? fallbackError
        throw new Error(errorMessage);
    }
    return await response.json()
}
export default postPledge


// async function postPledge(amount, comment, project) {
//     const url =`${import.meta.env.VITE_API_URL}/https://crowdfunding.fly.dev/projects/`;
//     const response =await fetch(url,{method:"POST",
    
//     // We need to tell the server that we are sending JSON dataso we set the Content-Type header to application/json
    
//     headers:{"Content-Type":"application/json",
// },
// body:JSON.stringify({
//     "amount": amount,
//     "comment": comment,
//     "project": project,
// }),
// });

// if (!response.ok) {
//     const fallbackError =`Error trying to post the pledge`;
//     const data =await response.json().catch(() =>{
//         throw new Error(fallbackError);});
//         const errorMessage = data?.detail?? fallbackError;
//         throw new Error(errorMessage);  }
        
//         return await response.json();}
        
//         export default postPledge;

/*

class Pledge(models.Model):
    amount = models.IntegerField()
    comment = models.CharField(max_length=200)
    anonymous = models.BooleanField()
    project = models.ForeignKey ('Project',
    on_delete=models.CASCADE,
    related_name='pledges')
    #supporter = models.CharField(max_length=200)
    supporter = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='pledges'
    )*/