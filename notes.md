<!--
1. First we will install some packages a. axios axios package help us for calling api in our project. b. router-dom this package help us to navigate between the pages .
 c. MAterial ui it provides us pre built react components which help us for faster web development.

2. Maine ek div bnaya hai app ke liye usme apna ek component header ke naam se bnakar pass kr dia hai abhi tak. aur same maine ek footer bnaya hai div me maine apne header section ko rkh lia hai aur footer main maine apna naam rkh lia hai

3. Now we will create our three Main routes : 1.Home route for entry level name and ourse deciding
and 2. Quiz route for display the  questions and 3. result route for display the results .

4. Pages name ke folder me tin page bna lia aur app.js me header component aur footer component toh hm show kr hi rhe the uske sath sath  abb header me hi div ke ander "Routes" me hmne home component bhej dia now remember Routes use hota hai to ensure only one routes render at a time initially switch use hota tha  routes ki jagah par .

As i have used link component of dom which allows me to navigate between the pages without reloading them every time also it provides me the ability to go back to the default page by pressing the text which i  am passing on it .

5. In home component i have create things like : 1. Image 2. three input boxex which comes from materialui and then the button tag .

6. toh maine ek div content ka bnaya usme ek div me title aur bahar image and uss title vale div me ek aur div apne input boxes ke liye . title and images ko toh css de hi di baki input boxes ke liye maine materialui ka use kia hai.

maine categories naam ka ek component bnaya hai usme apna data sara rkh rkha hai aur usko import kra lia
aur TextField use hota hai material ui ka html ke input ki trh isme label de dia auir variant outlind de dia normally aur
dropdown ke liye main textFeild me select prop aur pass kr dunga and abb dropdown me data dalne ke liye main Menuitem component ka use krta hu catgeories .map function me ek variable bnaya cat jo categories data ke first element ko point kr rha hai first element me ek toh category hai aur dusra ek value hai menuitem me key me cat.category and value me cat.value pass kr dia hai aur ye show bhi ho toh is liye isko return bhi kr dia hai .

7. TextField me variant prop specify krta hai style textfeild ka agar variant "outlined" hai toh ek input box bna dega agar "standard" hai toh ek underline de dega box me aur agar ye "filled" hai toh filled kr dega box ko


8. Home component pr name ,select,dificulty ke logics pr kaam krenge tino ke liye main useState ka use kr lunga  setcategory and difficulty toh home component me bna lunga but name ke liye  use state me dusre me bnaunga toh voh maine prop me pass kr dia
useState allow krta hai state ko manage krne me to show that data which changes over time
category hold the value of selected category and setCategory function update the category value on changes and same for difficulty
Remember name aur setName maine parent component se liye hai aur Home me use kia haias a prop taki name ko main outside se manage kr sku
toh yaad rkhna main apne name  ko multiple components me show krna chahta hu bas issi liya maine isse as a prop bheja hai taki outer /parent component ke hath me iska control ho agar Home component me hi bna deta toh sirf Home hi isko use kr pata


9. Now time to write logic for error and submit button ek handleSubmit name ka function pass kr dia button me onClick me aur iske liye ek error SetError ka usestate bna dia agar ek bhi box ki value empty hogi toh main setError true kr dunga else main setError false kr dunga aur  fetchQuestions component me category aur difficulty bhej dunga but ye maine abhi bnaya nhi hai but hm bna lenge aur histoy.push("/quiz ")  quiz route ka path de dia

Now understand useHistory hook ::
1. ye hook react router ne dia hai jo hme History object ka access deta hai jisse hm components me programmateically navigate kr ske
2. history.push(path) iska mtlb hai history ka ek stack hai usme ye nya path add ke do aur navigate kr jao ispe.. In simple terms, it lets you redirect the user to another page in your app by specifying a URL path.

as hm history ko maintain krte hue chahte hai jb sb kuch shi ho filled up ho aur user startquiz pr click kre toh direct quiz vala route open ho jaye but hm usehistory phle use kia krte the abb use nhi krte hai abb hm uski jagah pr useNavigate

10. Now abb main quiz route par redirect ho gya hoon and now i will be using
trivia api from which i have having the subjects data courses data and many other things like questions

"https://opentdb.com/api.php?amount=20&category={9 to 32}&difficulty=${medium}&type=multiple"


11. Maine app.js me  do useState bnaye hai ek questions ke liye and ek score
ke liye aur apne fetchquestion function ko async await bnaya usme {data} me axios.get(url) se data le lia axios is a popular library that helps me to
 1.make http requests in the javascript
 2.ye data hmesaha json format me hi leta hai
3.try and catch ki jagah khud hi errors ko handle kr leta hai

yha main axios use kr rha hu taki http request bna sku external api par taki data asynchronously fetch ho ske and axios.get method use kr rha hu taki trivia api ke database se category and difficulty level ke according data access kr sku .questions ka

4. maine quiz,score,setscore,setQuestions,questions ko quiz.jsx me le lia aur useeffect hook ka console.log(questions) kra hai use , useeffect hook help me to re-render application  whenever the prop changes toh useEffect mujhe props changes hone par re-render krane me easily help krta hai .
abb maine quiz.jsx main do useState bnaye hai ek options ke liye aur ek currentQuestions ke liye.

5. Now main chahta hu ki jo mera options hai question ke array me usme correct answer incorrect answer ka same hi order na rhe voh options shuffle hote rhe

 handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    ); isme hm ... spread operator ka use kr rhe hai taki incorrect answers individually show ho and


    const handleShuffle = (answers) => {
  return answers.sort(() => Math.random() - 0.5);
};
Math.random() generates a random number between 0 and 1.
Subtracting 0.5 from the random number gives a value between -0.5 and 0.5.
The sort() function uses this result to reorder the items in the array randomly.
in this way we are able to shuffle them


Abb hm apne quiz app ke ui pr kaam krenge


 -->
