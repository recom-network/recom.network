import React from 'react';
import { ROADMAP } from '@utils/roadmap';

export const Roadmap: React.FC = () => {
    return (
        <section className='roadmap-page'>
            <div className='roadmap'>
                {
                    ROADMAP.map((item, index) => (
                        <div className='roadmap__item' key={`${item.tasks}#${item.date}`}>
                            <div className='roadmap__checkpoint'>{item.date}</div>
                            <div className='roadmap__progress'>
                                <div className={`roadmap__indicator ${item.isDone ? 'roadmap__done' : ''}`} />
                                {
                                    (index != ROADMAP.length - 1) && <div className={`roadmap__line-to-next ${item.isDone ? 'roadmap__line-to-next--done' : ''}`} />
                                }
                            </div>
                            <div className='roadmap__task'>
                                {
                                    (Array.isArray(item.tasks)) ?
                                        <ul>{(item.tasks as any).map((task: any, index: any) => (
                                            <li key={`${task}#${index}`}>{task}</li>
                                        ))}</ul> : <p>{item.tasks}</p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};