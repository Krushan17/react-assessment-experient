import type { User } from "./types/user";

export const formatAndSortUsersByName = (data: User[]) => {
    const titles = new Set(['mr.', 'mrs.', 'ms.', 'miss', 'dr.', 'prof.']);
    const suffixes = new Set(['jr', 'sr', 'ii', 'iii', 'iv']);

    const rows = data.map((user) => {
      const raw = (user.name || '').trim();
      if (!raw) return user;

      const parts = raw.split(/\s+/);
      let title = '';
      let suffix = '';

      if (parts.length > 1 && titles.has(parts[0].toLowerCase())) {
        title = parts.shift() || '';
      }
      if (parts.length > 1 && suffixes.has(parts[parts.length - 1].toLowerCase())) {
        suffix = parts.pop() || '';
      }

      const firstName = parts.shift() || '';
      const lastName = parts.join(' ');

      const lastWithSuffix = [lastName, suffix].filter(Boolean).join(' ').trim();
      const displayName = lastWithSuffix
        ? `${lastWithSuffix}, ${firstName}${title ? ` (${title})` : ''}`
        : `${firstName}${title ? ` (${title})` : ''}`;

      return { ...user, name: displayName };
    });

    return rows.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  };