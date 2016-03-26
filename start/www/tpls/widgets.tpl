<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>Color</th>
			<th>Size</th>
			<th>Qty</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="widget in widgets">
			<td>{{widget.name}}</td>
			<td>{{widget.description}}</td>
			<td>{{widget.color}}</td>
			<td>{{widget.size}}</td>
			<td>{{widget.quantity}}</td>
			<td><a ng-href='#/widgets/{{widget.id}}'>View</a></td>
		</tr>
	</tbody>
</table>
