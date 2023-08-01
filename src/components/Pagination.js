import React, { useEffect, useState } from 'react';
import './Pagination.scss';

export default function Pagination({ currentPage, totalPages, cbPaginate }) {

    const [page, setPage] = useState(currentPage);
    const pageNumbers = [];
    const count = Math.min(5, totalPages);
    const [visiblePages, setVisiblePages] = useState({ prev: 0, next: Math.min(count, totalPages) });

    useEffect(() => {
        setVisiblePages({ prev: visiblePages.prev, next: Math.min(visiblePages.prev + count, totalPages) });
    }, [totalPages]// eslint-disable-line
    )

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const slidePages = (number) => {

        if (totalPages - visiblePages.next < number) number = totalPages - visiblePages.next;

        if (visiblePages.prev + number < 0) number = -visiblePages.prev;
        setVisiblePages({ prev: visiblePages.prev + number, next: Math.min(visiblePages.next + number, totalPages) });
    }

    return (
        <div className='pagination-wrapper'>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <div className="page-link" href="#" aria-label="Previous" onClick={() => slidePages(-count)}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </div>
                </li>
                {
                    pageNumbers.slice(visiblePages.prev, visiblePages.next).map(number =>
                        <li key={number} className={`page-item ${page === number ? 'active' : ''}`}>
                            <div className='page-link' onClick={() => {
                                setPage(number);
                                cbPaginate(number);
                            }}>
                                {number}
                            </div>
                        </li>
                    )
                }
                <li className="page-item">
                    <div className="page-link" href="#" aria-label="Next" onClick={() => slidePages(count)}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </div>
                </li>
            </ul>

        </div >
    )
}
