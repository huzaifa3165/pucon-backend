import React from 'react'
import Header from '../Header'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Dashboard() {

    const details = [
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
    ]

    return (
        <div className='firstdiv'>
            <Header />

            <br />
            <br />
            <br />
            <br />
            <div className='container row' style={{ paddingLeft: '120px' }}>

                {details.map((detail) => (
                    <div className='col-md-4 mt-2'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {detail.title}
                                </Typography>
                                <p>Posted on: {detail.date}</p>
                                <Typography variant="body2" color="text.secondary">
                                    {detail.description}
                                </Typography>
                            </CardContent>
                            <p style={{ float: 'right', marginRight: '20px' }}><b>Duration:</b> {detail.duration} hours</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard