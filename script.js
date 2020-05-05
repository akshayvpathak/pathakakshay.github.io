function dis(val)
{
	myform.result.value += val;
}
function clearscreen()
{
	myform.result.value = "";
}
function solve()
{
	let x = myform.result.value;
	let y  = eval(x);
	myform.result.value = y;
}
