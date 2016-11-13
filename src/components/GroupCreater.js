import React from 'react'
import addDocument from '../../server/server.js'

var bills = [];

class BillButton extends React.Component {
	function add_bill() {
		React.createElement(input, {type: 'text', id='bill'});
	}
	return(
		<p><a class="btn btn-primary btn-lg"
		  	  role="button"
		   	  onClick()={() => add_bill()}>
		    Add another bill...
		</a></p>
	);
}

export default class GroupCreater extends React.Component {
	var doc = new Object();

	function assemble_document() {
		doc.name = document.getElementById("group_name").value;
		doc.email = document.getElementById("email").value;
		for (var i = 0; i < document.getElementsByName("bill").length; i++) {
			document.getElementsByName("bill")[i]
		}
	}

	render() {
		return(
			<div>
				<form>
					Name: <input type="text" id="group_name" value="Name of group"><br>
					Email: <input type="email" id="email" value="Contact email (optional)"><br>
					// 
					Bill: <input type="text" name="bill" value="Bill I.D."><br>
					// bills.push(document.getElementById("bill").value);
			    <BillButton />
				</form>
			</div>
		);
	}
}