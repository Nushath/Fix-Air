import React from 'react'
import './RadioButton.css'

const RadioButton = () => {

    document.addEventListener('DOMContentLoaded', function() {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
    
        radioButtons.forEach(function(button) {
            button.addEventListener('change', function() {
                const tripType = this.getAttribute('data-type');
                // Add your logic here based on the selected trip type
                console.log('Selected trip type:', tripType);
            });
        });
    });

  return (
   <>
    <div class="wrapper-class">
        <input type="radio" id="radio1" name="tripType" data-type="roundtrip" required/>
        <label for="radio1">Round Trip</label>

        <input type="radio" id="radio2" name="tripType" data-type="oneway" required />
        <label for="radio2">One Way</label>

        <input type="radio" id="radio3" name="tripType" data-type="multicity" required />
        <label for="radio3">Multi-City</label>   
    </div>


   </>
    
  )
}

export default RadioButton
