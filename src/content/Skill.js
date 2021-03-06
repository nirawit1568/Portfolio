import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import Paper from '@material-ui/core/Paper';
// import Fade from '@material-ui/core/Fade';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Work from '../components/Work';

function Skill () {
    const[myskill,setmyskill] = useState(['HTML','CSS','JS','SQL','RPA','PYTHON']);
    const[myFrameWork,setmyFrameWork] = useState(['ReactNative','ReactJS','NodeJS','Django']);
    const useStyles = makeStyles((theme) => ({
        root: {
          height: 180,
        },
        container: {
          display: 'flex',
        },
        paper: {
          margin: theme.spacing(1),
        }
      }));

      const classes = useStyles();
      const [checked, setChecked] = React.useState(false);
    
      const handleChange = () => {
        setChecked((prev) => !prev);
      };
    return(
        <div className="condiv skills">
            <h1 className="subtopic">MY SKILLS</h1>
            <h2 className="subtopic">Programming languages</h2>
            <ul>
                {myskill.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>
            <h2 className="subtopic">Frameworks</h2>
            <ul>
                {myFrameWork.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>
            <br/>
            <h1>ALL WORKS</h1>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className="allworks">
                        <div className="row">
                            <Work description="Summary sale total with RPA." name="Summary sale total" link="www.github.com/wut5238/RPA_Project"></Work>
                            <Work description="Program chat with java." name="Chat application" link="www.github.com/nirawit1568/ChatApllication"></Work>  
                            <Work description="Analysis car sale with pandas framework." name="Car sale analysis" link="www.github.com/wut5238/Project_PSIT"></Work>  
                            <Work description="Create web application with nodejs and use database is mongodbAtlas." name="axios-blog" link="www.github.com/nirawit1568/axios_blog"></Work>  
                            <Work description="Create mobile application with ReactNative." name="Course review" link="www.github.com/nirawit1568/ITKMITL_COURSEREVIEWS"></Work>  
                            <Work description="Create web application with ReactJs." name="Portfolio" link="www.github.com/nirawit1568/Portfolio"></Work>
                            <Work description="Create web application with Django." name="Kod Vote" link="www.github.com/nirawit1568/Kodvote"></Work> 
                            <Work description="Create static website to show information." name="Web page" link="www.github.com/ICopKungi/webtech"></Work>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;