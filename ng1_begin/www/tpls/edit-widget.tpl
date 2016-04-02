<form name="widgetForm" novalidate>
	<div>
		<label>Name: <input type="text" name="widgetName" ng-model="widget.name" required></label>
		<span ng-show="widgetForm.widgetName.$invalid">Widget Name is Required!</span>
	</div>
	<div>
		<label>
			Description:
			<textarea ng-model="widget.description" name="widgetDescription" rows="5" cols="80"></textarea>
		</label>
	</div>
	<div>
		<label>
			Color: <select ng-model="widget.color" name="widgetColor"
				ng-options="widgetColor.code as widgetColor.label
					group by widgetColor.category
					for widgetColor in widgetColors">
				<option value="">Select One</option>
			</select>
		</label>
	</div>
	<div>
		<fieldset>
			<legend>Size</legend>
			<div ng-repeat="widgetSize in widgetSizes">
				<label>{{widgetSize.label}}
					<input ng-model="widget.size" type="radio"
						name="widgetSize" ng-value="widgetSize.code">
				</label>
			</div>
		</fieldset>
	</div>
	<div>
		<label>Quantity: <input name="widgetQuantity" ng-model="widget.quantity" type="number" required></label>
		<span ng-show="widgetForm.widgetQuantity.$invalid">A number is Required!</span>
	</div>
	<button type="button" ng-click="saveWidget()">Save</button>
	<button type="button" ng-click="deleteWidget()">Delete</button>
	<button type="button" ng-click="returnToList()">Return to List</button>
</form>
