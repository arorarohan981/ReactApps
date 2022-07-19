import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const dayintheweek = new Date().getDay();
    const forecastdays=WEEK_DAYS.slice(dayintheweek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayintheweek));

    return (
        <>
            <label className="title"> Daily </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">
                                        {forecastdays[idx]}
                                    </label>
                                   <label className="description">
                                        {item.weather[0].description}
                                    </label>
                                   
                                    <label className="min-max">
                                        {Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_max)} °C 
                                 </label> 
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-detail-grid">
                                <div className="daily-detail-grid-item">
                                    <label>
                                        Pressure
                                    </label>
                                    <label className="value">
                                        {item.main.pressure} hPA
                                    </label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>
                                        Humidity
                                    </label>
                                    <label className="value">
                                        {item.main.humidity} %
                                    </label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>
                                        Clouds
                                    </label>
                                    <label className="value">
                                        {item.clouds.all} %
                                    </label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>
                                        Wind Speed : 
                                    </label>
                                    <label className="value">
                                        {item.wind.speed} m/s
                                    </label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>
                                        Sea Level 
                                    </label>
                                    <label className="value">
                                        {item.main.sea_level} m
                                    </label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>
                                        Feels Like
                                    </label>
                                    <label className="value">
                                        {Math.round(item.main.feels_like)} °C 
                                    </label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );

}

export default Forecast;