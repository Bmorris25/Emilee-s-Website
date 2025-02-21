import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="contact-box container">
            <h1 className="contact-head">Contact Me</h1>
            <form action="action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="dogbreed">Dog Breed</label> 
                <input type="text" id="lname" name="lastname" placeholder="Your dog's breed.."/>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    </div>
    )
    
}

export default Contact