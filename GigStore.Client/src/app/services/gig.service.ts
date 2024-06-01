import { Injectable } from '@angular/core';
import { Gig } from '../models/gig';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
	providedIn: 'root',
})
export class GigService {
	constructor() {}

	public getGigs(): Gig[] {
		let gig = new Gig();
		gig.id = uuidv4();
		gig.name = 'Website Restoration';
		gig.detail =
			'Using core technologies, HTML, CSS, Javascript to modernize and enhanced an existing website';
    gig.price = 1000
    gig.technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'SCSS', 'BOOTSTRAP', 'TAILWIND']
    return [gig]
	}
}
