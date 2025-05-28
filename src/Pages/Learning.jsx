import Layout from '../Templates/MobileLayout.tsx'
import '../App.css'
import Topic from '../Components/LearningTopic.tsx'
import Article from '../Components/Article.tsx'
import Menstruation1 from '../assets/Learning/Menstruation1.jpg'
import Menstruation2 from '../assets/Learning/Menstruation2.jpg'
import Menstruation3 from '../assets/Learning/Menstruation3.jpg'
import PM1 from '../assets/Learning/PM1.jpg'
import PM2 from '../assets/Learning/PM2.jpg'
import PM3 from '../assets/Learning/PM3.jpg'
import Menopause1 from '../assets/Learning/Menopause1.jpg'
import Menopause2 from '../assets/Learning/Menopause2.jpg'
import Menopause3 from '../assets/Learning/Menopause3.jpg'
import Lifestyle1 from '../assets/Learning/Lifestyle1.jpg'
import Lifestyle2 from '../assets/Learning/Lifestyle2.jpg'
import Lifestyle3 from '../assets/Learning/Lifestyle3.jpg'
function Learning() {

    return (
        <>
            <Layout allowBack={false} allowNav={true} title={""} current={'learning'} className="bg-gradient-to-b from-rose-50 to-rose-200 ">
                <Topic title="Menstruation">
                    <Article title="What is a period?" image={Menstruation1} className="items-center" />
                    <Article title="What are common period symptoms?" image={Menstruation2} />
                    <Article title="Understand your cycle phases" image={Menstruation3} />
                </Topic>

                <Topic title="Peri-menopause">
                    <Article title="Difference between peri-menopause and the menopause" image={PM1} />
                    <Article title="Symptoms related to the peri-menopause" image={PM2} />
                    <Article title="Why am I experiencing the peri-menopause" image={PM3} />
                </Topic>


                <Topic title="Menopause">
                    <Article title="Why do we go through the menopause?" image={Menopause1} />
                    <Article title="When to expect the menopause" image={Menopause2} />
                    <Article title="What treatments are available?" image={Menopause3} />
                </Topic>


                <Topic title="Lifestyle" className="mb-5">
                    <Article title="Breakfast ideas to start your day the right way " image={Lifestyle1} />
                    <Article title="The benefits of a daily meditation" image={Lifestyle2} />
                    <Article title="The importance of a well-defined morning routine" image={Lifestyle3} />
                </Topic>

            </Layout >
        </>
    )
}

export default Learning
