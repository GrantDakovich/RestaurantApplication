function getItemFromID(itemID, info) {
	for (let i = 0; i < info.menuInfoArray.length; i++) {
		for (let j = 0; j < info.menuInfoArray[i].orderableItems.length; j++) {
			const item = info.menuInfoArray[i].orderableItems[j];
			if (itemID === item.itemID) {
				return item;
			}
		}
	}
}

export default getItemFromID;

