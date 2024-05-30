export default function appendToEachArrayValue(array, appendString) {
	cont arr = []
	for (const idx of array) {
		arr.push(appendString + idx)
	}

	return arr;
}
