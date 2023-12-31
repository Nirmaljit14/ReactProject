import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postPledge from '../api/post-pledges';
function CreatePledge(props) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [pledgeDetails, setPledgeDetails] = useState({
        project: props.projectId,
        amount: 0,
        comment: "",
        anonymous: false,
    });
    const handleChange = (event) => {
        if (event.target.id === 'anonymous'){
            setPledgeDetails((prevPledgeDetails) => ({
                ...prevPledgeDetails,
                [event.target.id]: event.target.value,
                anonymous: event.target.checked,
            }));
        }
        else {
            const { id, value } = event.target
            setPledgeDetails ((prevPledgeDetails) => ({
                ...prevPledgeDetails,
                [id]: value,
            }));
        }
    };
    const handleChecked = (event) => {
    setPledgeDetails({
        ...pledgeData,
        [event.target.id]: event.target.checked,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
    postPledge(pledgeDetails.amount, pledgeDetails.comment, pledgeDetails.anonymous, pledgeDetails.project)
        .then(() => {
        navigate("/");
        })
        .catch(() => {
        setIsLoading(false);
        });
    };
    if (isLoading) {
    return <p>Loading...</p>;
    }
    return (
        <form>
        {JSON.stringify(pledgeDetails)}
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                type="number"
                id="amount"
                placeholder="Enter the amount"
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input
                type="text"
                id="comment"
                placeholder="Enter a comment"
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="anonymous">Anonymous Pledge</label>
                <input type="checkbox" id="anonymous" onChange={handleChecked} />
            </div>
                <input type="submit" value="Pledge" />
        </form>
    );
}
export default CreatePledge



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import postPledge from '../api/post-login'

// function CreatePledge(props) {
// const navigate = useNavigate()
// const [isLoading, setIsLoading] = useState(false)
// const [pledgeData, setPledgeData] = useState({
//   project: props.projectId,
//     amount: 0,
//     comment: '',
//     anonymous: false
// })

// const handleChange = (e) => {
//     setPledgeData({
//     ...pledgeData, 
//     [e.target.id]: e.target.value
//     })
// }

// const handleChecked = (e) => {
//     setPledgeData({
//     ...pledgeData,
//     [e.target.id]: e.target.checked
//     })
// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     postPledge(pledgeData)
//     .then(() => {
//         navigate(0)
//     })
//     .catch(() => {
//         setIsLoading(false)
//     })
// }

// if(isLoading) {
//     return <p>Loading...</p>
// }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="amount">Amount</label>
//         <input 
//           type="text" 
//           id="amount" 
//           placeholder='Enter the amount' 
//           onChange={handleChange} 
//         />
//       </div>
//       <div>
//         <label htmlFor="comment">Comment</label>
//         <input 
//           type="text" 
//           id="comment" 
//           placeholder='Enter a comment' 
//           onChange={handleChange} 
//         />
//       </div>
//       <div>
//         <label htmlFor='anonymous'>Anonymous Pledge</label>
//         <input
//           type='checkbox'
//           id='anonymous'
//           onChange={handleChecked}
//         />
//       </div>
//       <input type="submit" value="Pledge" />
//     </form>
//   )
// }

// export default CreatePledge