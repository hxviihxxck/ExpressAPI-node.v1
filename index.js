const express = require('expresss');
// This will create a package.json file with the relevant
// lirbary modules

const app = express();
app.use(express.json());

courses = [
    {id: 1, course: 'science', AverageGPA: 'C+'},
    {id: 2, course: 'humanities', AverageGPA: 'B+'},
    {id: 3, course: 'english', MinimumGPA: 'B'},
    {id: 4, course: 'maths', MinimumGPA: 'C+'}
]

app.get('/api/courses', (req, res) => {
    res.send([
        
    ])
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        courses: req.body.course,
        MinimumGPA: '-'
    }

    courses.push(course);
    res.send(course);
})

app.delete('/api/courses', (req, res) => {
    // Search for course and return 404 if not found
    const course = courses.find(c => c.course === req.params.course);
    if (!course) res.status(404).send('Course could not be found');

    // Delete 
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Send response
    res.send(course);





});


app.get('/api/courses/:course', (req, res) => {
    const courseName = req.params.course;
    res.status(404).send('Course not found');
    res.send(courseName);
});

app.listen(3000, () => console.log('Listening... Awaiting Response on Port 3000'));