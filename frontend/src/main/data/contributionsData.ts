import { Contribution } from '../types';

export const contributionsData: Contribution[] = [
    {
        project: 'ShareX',
        description: 'A free and open-source screenshot tool',
        pullRequests: [
            {
                title: 'Updated missing Korean translations',
                url: 'https://github.com/ShareX/ShareX/pull/5016/files',
                status: 'merged',
            },
        ],
        skills: ['CMake', 'C#'],
    },
    {
        project: 'flameshot',
        description: 'A free and open-source screenshot tool',
        pullRequests: [
            {
                title: 'Add Korean translation',
                url: 'https://github.com/flameshot-org/flameshot/pull/834/files',
                status: 'merged',
            },
            {
                title: 'Enable Korean translation',
                url: 'https://github.com/flameshot-org/flameshot/pull/846',
                status: 'merged',
            },
            {
                title: 'Update Internationalization_ko.ts',
                url: 'https://github.com/flameshot-org/flameshot/pull/1033',
                status: 'merged',
            },
        ],
        skills: ['CMake', 'C++', 'Qt'],
    },
    {
        project: 'misskey',
        description: 'A free and open-source social network service',
        pullRequests: [
            {
                title: 'fix(frontend): Fix cat ears are awkward on reply modal',
                url: 'https://github.com/misskey-dev/misskey/pull/11309',
                status: 'merged',
            },
        ],
        skills: ['CSS', 'Vue', 'TypeScript'],
    },
    {
        project: 'ttf-proggy-vector',
        description: 'Contributed proggy-vector font installation script on Arch Linux User Repository',
        pullRequests: [
            {
                title: 'initial commit',
                url: 'https://aur.archlinux.org/cgit/aur.git/commit/PKGBUILD?h=ttf-proggy-vector',
                status: 'merged',
            },
        ],
        skills: ['Arch Linux', 'PKGBUILD'],
    },
    {
        project: 'ttf-neodgm-pro',
        description: 'Contributed neodgm-pro font installation script on Arch Linux User Repository',
        pullRequests: [
            {
                title: 'initial commit',
                url: 'https://aur.archlinux.org/cgit/aur.git/commit/PKGBUILD?h=ttf-neodgm-pro',
                status: 'merged',
            },
        ],
        skills: ['Arch Linux', 'PKGBUILD'],
    }
]; 